
import React from 'react';
import VideoCard from './VideoCard';
import './Feed.css';

const videos = [
  { id: 1, url: 'video1.mp4', description: 'double tap roucket league ' },
  { id: 2, url: 'video2.mp4', description: 'amazing clear that help to goal' },
  { id: 3, url: 'video3.mp4', description: 'my best goal in rocket league' },
  {id: 4, url: 'video4.mp4', description: 'amazing celing shot goal'}
];

function Feed() {
  return (
    <div>
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default Feed;
