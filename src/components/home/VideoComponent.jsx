import React from "react";
import "./home.css";
import videoFile from "../../assets/video.mp4";

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video controls>
        <source src={videoFile} type="video/mp4" />
        Ваш браузер не поддерживает тег video.
      </video>
    </div>
  );
};

export default VideoComponent;
