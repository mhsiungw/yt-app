import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import VideoDisply from './VideoDisplay/VideoDisplay'

class Videos extends React.Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <VideoDisply />
            </div>
        )
    }
}

export default Videos
