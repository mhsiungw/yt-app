import React from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import '../stylesheets/App.css'

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onFormSubmit('buildings')
    }

    onFormSubmit = async (term) => {
        const result = await youtube.get('/search', {
            params: {
                q: term,
            },
        })
        this.setState({ videos: result.data.items, selectedVideo: result.data.items[0] })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="container">
                <div className="search-bar">
                    <SearchBar onFormSubmit={this.onFormSubmit} />
                </div>

                <div className="video-display">
                    <div className="video-detail">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="video-list">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
