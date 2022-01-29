import React from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

import '../../stylesheets/Videos.css'

class Videos extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="search-bar">
                    <SearchBar/>
                </div>
                <div className="video-display">
                    <div className="video-detail">
                        <VideoDetail/>
                    </div>
                    <div className="video-list">
                        <VideoList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Videos 