import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  
   <div className="video-container">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      height="315"
      width="560"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video;

// H 400
// W 600