import React from 'react'

import { connect } from 'react-redux'
import { fetchVideos, selectVideo } from '../../actions'

import VideoItem from './VideoItem'

class VideoList extends React.Component {
    componentDidMount() {
        this.props.fetchVideos('buildings')
    }

    renderedList = () => {
        if (!this.props.videos) {
            return <div />
        }

        return this.props.videos.map((video) => (
            <VideoItem key={video.id.videoId} video={video} selectVideo={this.props.selectVideo} />
        ))
    }
    render() {
        return <div>{this.renderedList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { videos: state.videos }
}

export default connect(mapStateToProps, { fetchVideos, selectVideo })(VideoList)
