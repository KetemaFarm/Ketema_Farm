import React from "react";

const formatDate = (isoString) => {
  if (!isoString) return "";
  try {
    return new Date(isoString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch (e) {
    return "";
  }
};

function VideoCard({ video }) {
  const thumbnailUrl =
    video.thumbnailUrl ||
    `https://via.placeholder.com/400x225?text=${encodeURIComponent(
      video.title || "Video"
    )}`;
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${video.title}`}
      >
        <img
          src={thumbnailUrl}
          alt={`Thumbnail for ${video.title}`}
          className="w-full aspect-video object-cover" // Use aspect-video for consistent ratio
          loading="lazy"
        />
      </a>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md font-semibold mb-1 text-gray-800 hover:text-green-600 line-clamp-2">
          {" "}
          {/* Limit title lines */}
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            {video.title || "Untitled Video"}
          </a>
        </h3>
        {video.channelTitle && (
          <p className="text-xs text-gray-500 mb-2">{video.channelTitle}</p>
        )}
        <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-3">
          {" "}
          {/* Limit description lines */}
          {video.description
            ? `${video.description.substring(0, 120)}${
                video.description.length > 120 ? "..." : ""
              }`
            : "No description."}
        </p>
        {video.publishedAt && (
          <p className="text-xs text-gray-400 mt-auto mb-3">
            Published: {formatDate(video.publishedAt)}
          </p>
        )}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out text-sm"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

export default VideoCard;
