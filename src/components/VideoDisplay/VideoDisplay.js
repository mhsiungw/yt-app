import React from 'react'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

import '../../stylesheets/VideoDisplay.scss'

class VideoDisplay extends React.Component {
    render() {
        return (
            <div className="video-display">
                <VideoDetail />
                <VideoList />
            </div>
        )
    }
}

export default VideoDisplay
