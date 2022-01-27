import React from 'react'
import styles from '../stylesheets/VideoDetail.module.css'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div style={{ color: '#fff' }}>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className={styles['video-detail']}>
            <iframe title="video-player" src={videoSrc} />
            <div className={styles['info']}>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
