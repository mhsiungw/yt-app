import React from 'react'

const VideoItem = ({ video, selectVideo }) => {
    return (
        <div
            onClick={() => {
                selectVideo(video)
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
