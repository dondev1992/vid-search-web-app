import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="ui segment">
        <div className="ui embed">
          <iframe title="video player" src={videoUrl} />
        </div>
        <h3 className="ui header">{video.snippet.channelTitle}</h3>
        <p>{video.snippet.description}</p>
      </div>
    );
  }
};

export default VideoDetail;
