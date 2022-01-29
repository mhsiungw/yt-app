import React from 'react'

import {connect} from 'react-redux'

import styles from '../stylesheets/VideoDetail.module.css'

const VideoDetail = ({ selectedVideo }) => {
    if (selectedVideo) {
        return <div style={{ color: '#fff' }}>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    return (
        <div className={styles['video-detail']}>
            <iframe title="video-player" src={videoSrc} />
            <div className={styles['info']}>
                <h4>{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {selectedVideo: state.selectedVideo}
}

export default connect(mapStateToProps)(VideoDetail)
