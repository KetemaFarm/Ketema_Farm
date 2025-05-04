import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import { FaYoutube, FaSearch, FaFilter } from "react-icons/fa";
import VideoCard from "./VideoCard";
// Import Components (assuming they exist as previously defined)
// import Sidebar from "./Sidebar";
// import VideoControls from "./VideoControls";
// import VideoCard from "./VideoCard";
// import LoadingSpinner from "./LoadingSpinner";
// import ErrorMessage from "./ErrorMessage";

// --- Configuration from Environment Variables ---
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_IDS_STRING = import.meta.env.VITE_YOUTUBE_CHANNEL_IDS; // Get the comma-separated string
const API_BASE_URL = import.meta.env.VITE_YOUTUBE_API_BASE_URL;
const MAX_RESULTS_PER_CHANNEL =
  import.meta.env.VITE_MAX_RESULTS_PER_CHANNEL || 12; // Default if not set

// --- Helper Function to Transform YouTube Search API Item (Same as before) ---
const transformYoutubeItem = (item) => {
  try {
    const videoId = item.id?.videoId;
    const snippet = item.snippet;
    if (!videoId || !snippet) return null;
    return {
      id: videoId,
      title: snippet.title,
      description: snippet.description,
      thumbnailUrl:
        snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url,
      channelTitle: snippet.channelTitle,
      publishedAt: snippet.publishedAt,
    };
  } catch (error) {
    console.error("Error transforming YouTube item:", error, item);
    return null;
  }
};

// --- Main Page Component ---
function VideosPage() {
  const [allVideos, setAllVideos] = useState([]); // Holds combined videos from ALL channels
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchErrors, setFetchErrors] = useState({}); // Track errors per channel

  // Control states
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date-desc");
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  // --- Parse Channel IDs ---
  const channelIds = useMemo(
    () =>
      CHANNEL_IDS_STRING
        ? CHANNEL_IDS_STRING.split(",")
            .map((id) => id.trim())
            .filter(Boolean) // Split, trim whitespace, remove empty strings
        : [],
    // Ensure CHANNEL_IDS_STRING is a dependency if it could theoretically change,
    // though for env vars it usually doesn't after initial load. Empty array is common.
    [CHANNEL_IDS_STRING]
  );

  // --- Data Fetching ---
  useEffect(() => {
    // --- Validate Config ---
    // Check API_KEY and API_BASE_URL existence as well
    if (!API_KEY || channelIds.length === 0 || !API_BASE_URL) {
      let errMsg = "Configuration error:";
      if (!API_KEY)
        errMsg += " YouTube API Key missing (VITE_YOUTUBE_API_KEY).";
      if (channelIds.length === 0)
        errMsg += " No Channel IDs found in .env (VITE_YOUTUBE_CHANNEL_IDS).";
      if (!API_BASE_URL)
        errMsg += " YouTube API Base URL missing (VITE_YOUTUBE_API_BASE_URL).";
      console.error(errMsg); // Log the specific error
      setError(errMsg + " Please check your .env file and restart the server.");
      setLoading(false);
      return;
    }

    const fetchAllChannelVideos = async () => {
      setLoading(true);
      setError(null);
      setFetchErrors({});
      setAllVideos([]); // Clear previous results

      const promises = channelIds.map((channelId) => {
        const url = `${API_BASE_URL}/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${MAX_RESULTS_PER_CHANNEL}&type=video`;
        return axios
          .get(url)
          .then((response) => ({
            channelId: channelId,
            data: response.data?.items || [],
            status: "fulfilled",
          }))
          .catch((err) => ({
            channelId: channelId,
            error: err,
            status: "rejected",
          }));
      });

      const results = await Promise.allSettled(promises);

      let combinedVideos = [];
      const errorsByChannel = {};
      let hasAnyError = false;

      results.forEach((result) => {
        if (
          result.status === "fulfilled" &&
          result.value.status === "fulfilled"
        ) {
          const fetchedItems = result.value.data;
          if (Array.isArray(fetchedItems)) {
            const transformed = fetchedItems
              .map((item) => transformYoutubeItem(item))
              .filter(Boolean);
            combinedVideos = combinedVideos.concat(transformed);
          } else {
            console.error(
              `Invalid data format received for channel ${result.value.channelId}`
            );
            errorsByChannel[result.value.channelId] = `Invalid data received.`;
            hasAnyError = true;
          }
        } else if (
          result.status === "fulfilled" &&
          result.value.status === "rejected"
        ) {
          const failedChannelId = result.value.channelId;
          const errorInfo = result.value.error;
          console.error(
            `Error fetching videos for channel ${failedChannelId}:`,
            errorInfo.response?.data?.error?.message || errorInfo.message
          );
          errorsByChannel[failedChannelId] = `Failed to load videos (${
            errorInfo.response?.status || "Network Error"
          }).`;
          hasAnyError = true;
        } else {
          console.error("A promise failed unexpectedly:", result.reason);
          hasAnyError = true; // Indicate a general problem
        }
      });

      combinedVideos.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );

      setAllVideos(combinedVideos);
      setFetchErrors(errorsByChannel);
      if (hasAnyError && combinedVideos.length === 0) {
        setError(
          "Failed to load videos from any channel. Please check configuration, API status, and console errors."
        );
      } else if (hasAnyError) {
        // Optionally set a non-blocking message if some channels failed but others loaded
        // setError("Some video channels failed to load. Displaying available videos.");
        console.warn("Some video channels failed to load.");
      }

      setLoading(false);
    };

    fetchAllChannelVideos();
    // Add API_KEY, API_BASE_URL, channelIds as dependencies
    // Although they come from env/useMemo, this makes dependencies explicit.
  }, [API_KEY, API_BASE_URL, channelIds, MAX_RESULTS_PER_CHANNEL]); // Added MAX_RESULTS_PER_CHANNEL dependency

  // --- Filtering and Sorting Logic ---
  const processedVideos = useMemo(() => {
    // Start with the raw list fetched from the API
    let filtered = [...allVideos];

    // 1. Filter by Selected Category (Client-Side Keyword Matching)
    if (selectedCategory && selectedCategory !== "Show All") {
      // Split category into keywords, make lowercase, handle '&' and whitespace
      const categoryKeywords = selectedCategory
        .toLowerCase()
        .split(/[\s&]+/) // Splits by space or &
        .filter(Boolean); // Remove empty strings if any

      if (categoryKeywords.length > 0) {
        filtered = filtered.filter((video) => {
          // Combine title and description safely, make lowercase
          const titleText = video.title?.toLowerCase() || "";
          const descriptionText = video.description?.toLowerCase() || "";
          const videoText = `${titleText} ${descriptionText}`;

          // --- *** THE FIX: Use .some() instead of .every() *** ---
          // Check if *at least one* non-empty keyword is present in the video text
          return categoryKeywords.some(
            (keyword) => keyword && videoText.includes(keyword)
          );
        });
      }
    }

    // 2. Filter by Search Term (apply to the *already category-filtered* list)
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (video) =>
          (video.title?.toLowerCase() || "").includes(lowerSearchTerm) ||
          (video.description?.toLowerCase() || "").includes(lowerSearchTerm) ||
          (video.channelTitle?.toLowerCase() || "").includes(lowerSearchTerm)
      );
    }

    // 3. Sort (apply to the result of *both* filters)
    const sorted = [...filtered]; // Sort the final filtered list
    switch (sortOption) {
      case "date-asc":
        sorted.sort(
          (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
        );
        break;
      case "title-asc":
        sorted.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        break;
      case "title-desc":
        sorted.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
        break;
      case "date-desc":
      default:
        sorted.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
        break;
    }
    return sorted; // Return the fully processed (filtered and sorted) list
  }, [allVideos, searchTerm, sortOption, selectedCategory]); // Dependencies are correct

  // --- Event Handlers ---
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSortChange = useCallback((event) => {
    setSortOption(event.target.value);
  }, []);

  const handleCategorySelect = useCallback((categoryName) => {
    setSelectedCategory(categoryName);
    setSearchTerm(""); // Clear search when category changes
  }, []);

  // --- Render Logic ---
  const currentCategoryTitle =
    selectedCategory === "Show All"
      ? `Latest Videos (${allVideos.length})` // Show total videos when 'Show All'
      : `${selectedCategory} (${processedVideos.length})`; // Show count for the category

  const hasVisibleVideos = processedVideos.length > 0;
  const hasFailedChannels = Object.keys(fetchErrors).length > 0;

  return (
    <div className="flex min-h-screen bg-gray-50 font-['Montserrat']">
      {/* Sidebar with updated styling */}
      <aside className="w-64 bg-white p-6 border-r border-gray-200 hidden md:block">
        <h2 className="text-xl font-bold text-gray-800 mb-6 font-['Rubik']">
          Categories
        </h2>
        <nav className="space-y-2">
          {[
            "Show All",
            "Farming Techniques",
            "Crop Care",
            "Irrigation",
            "Fruits",
            "Grains",
          ].map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-green-100 text-green-800 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {/* Header with search controls */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 font-['Rubik']">
            Farming Videos
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-500" />
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 font-['Kanit'] bg-white"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loading / Error Display */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && hasFailedChannels && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
            <p className="text-yellow-700 font-medium mb-2">
              Note: Could not load videos from all channels
            </p>
            {Object.entries(fetchErrors).map(([channelId, msg]) => (
              <p key={channelId} className="text-yellow-600 text-sm">
                Channel {channelId}: {msg}
              </p>
            ))}
          </div>
        )}

        {/* Video Grid */}
        {!loading && !error && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-['Rubik']">
              {currentCategoryTitle}
            </h2>

            {hasVisibleVideos ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {processedVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2 font-['Rubik']">
                  No Videos Found
                </h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm
                    ? "Try adjusting your search terms."
                    : "Try selecting a different category or check back later."}
                </p>
                {selectedCategory !== "Show All" && (
                  <button
                    onClick={() => handleCategorySelect("Show All")}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200 font-['Kanit']"
                  >
                    Show All Videos
                  </button>
                )}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default VideosPage;
