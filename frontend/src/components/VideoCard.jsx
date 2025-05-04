import React from "react";
import { FaYoutube } from "react-icons/fa";
import { formatDate } from "../utils/dateFormatter";
import { calcGeneratorDuration } from "framer-motion";

function VideoCard({ video }) {
  const getThumbnailUrl = () => {
    if (video.id) {
      return `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
    }
    if (video.thumbnailUrl) {
      return video.thumbnailUrl.startsWith("http")
        ? video.thumbnailUrl
        : `https:${video.thumbnailUrl}`;
    }
    return `https://via.placeholder.com/400x225?text=No+Thumbnail`;
  };

  const thumbnailUrl = getThumbnailUrl();
  console.log(thumbnailUrl);
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg ">
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
      >
        <img
          src={thumbnailUrl}
          alt={`Thumbnail for ${video.title || "YouTube video"}`}
          className="w-full aspect-video object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x225?text=No+Thumbnail";
          }}
        />
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </a>
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 font-['Rubik']">
          {video.title || "Untitled Video"}
        </h3>
        {video.channelTitle && (
          <p className="text-sm text-gray-500 mb-2">{video.channelTitle}</p>
        )}
        {video.publishedAt && (
          <p className="text-xs text-gray-400 mb-3">
            Published: {formatDate(video.publishedAt)}
          </p>
        )}

        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-200 font-['Kanit']"
        >
          <FaYoutube /> Watch
        </a>
      </div>
    </div>
  );
}

export default VideoCard;
