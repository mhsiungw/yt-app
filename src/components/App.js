import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

import '../stylesheets/App.css'

class App extends React.Component {
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

export default App
