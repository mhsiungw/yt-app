import '../stylesheets/VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div
            onClick={() => {
                onVideoSelect(video)
            }}
            key={video.id.videoId}
            className="video-item"
        >
            <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <p>{video.snippet.title}</p>
        </div>
    )
}

export default VideoItem
