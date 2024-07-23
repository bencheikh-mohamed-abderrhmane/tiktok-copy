// src/components/VideoCard.js
import React from 'react';
import './VideoCard.css';

function VideoCard({ video }) {
  return (
    <div>
      <video className='video' width="320" height="240" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
    </div>
  );
}

export default VideoCard;
