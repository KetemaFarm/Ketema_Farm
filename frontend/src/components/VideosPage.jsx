import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";

// Import Components (assuming they exist as previously defined)
import Sidebar from "./Sidebar";
import VideoControls from "./VideoControls";
import VideoCard from "./VideoCard";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

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
    <div className="flex min-h-screen mt-15 bg-gray-100"
    >
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      <main className="flex-grow p-4 md:p-6 lg:p-8 overflow-x-hidden">
        <VideoControls
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          sortOption={sortOption}
          onSortChange={handleSortChange}
        />

        {/* Loading / Error Display */}
        {loading && <LoadingSpinner message="Loading videos..." />}

        {/* Display general error first if present */}
        <ErrorMessage message={error && !loading ? error : null} />

        {/* Display specific channel errors if they occurred and there's no general fatal error */}
        {!loading && !error && hasFailedChannels && (
          <div className="mb-4 space-y-1">
            <p className="text-sm text-yellow-700 font-medium px-1">
              Note: Could not load videos from all channels:
            </p>
            {Object.entries(fetchErrors).map(([channelId, msg]) => (
              <ErrorMessage
                key={channelId}
                message={`Channel ${channelId}: ${msg}`} // Show specific channel error
              />
            ))}
          </div>
        )}

        {/* Content Section - Only show if not loading AND no fatal error occurred */}
        {!loading && !error && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 px-1">
              {currentCategoryTitle} {/* Updated title */}
            </h2>
            {hasVisibleVideos ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {processedVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              // No results message (shown if filters result in empty list, even if fetch was ok)
              <div className="text-center text-gray-500 mt-10 py-10 px-4 bg-white rounded shadow-sm">
                {/* Simplified No Results */}
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No Videos Found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm
                    ? "Try adjusting your search terms."
                    : "Try selecting a different category or check back later."}
                </p>
                {selectedCategory !== "Show All" && (
                  <button
                    onClick={() => handleCategorySelect("Show All")}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Show All Videos
                  </button>
                )}
              </div>
            )}
          </section>
        )}
        {/* Fallback message if loading never finishes and no error is set (unlikely) */}
        {!loading &&
          !error &&
          !hasVisibleVideos &&
          allVideos.length === 0 &&
          !hasFailedChannels && (
            <div className="text-center text-gray-500 mt-10 py-10 px-4">
              <p>No videos available at the moment.</p>
            </div>
          )}
      </main>
    </div>
  );
}

export default VideosPage;
