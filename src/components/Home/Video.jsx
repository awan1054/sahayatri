import React from "react";
const Video = () => {
  return (
    <div className="video-container flex items-center justify-center bg-gray-100 p-4">
      <video
        className="rounded-2xl shadow-lg"
        width="800"
        height="450"
        controls
        autoPlay
        muted
        loop
      >
        <source src='/Sahayatri.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
