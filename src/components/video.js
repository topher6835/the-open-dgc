import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  
  <div className="video" style={{padding: '20px'}}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      height="400"
      width="600"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video;