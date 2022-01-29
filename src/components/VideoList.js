import React, {useEffect} from 'react'

import {connect} from 'react-redux'
import {fetchVideos, selectVideo} from '../actions'

import VideoItem from './VideoItem'

const VideoList = ({videos, fetchVideos, selectVideo}) => {
    useEffect(() => {
        fetchVideos('buildings')
    }, [])

    const renderedList = videos.map((video) => <VideoItem key={video.id.videoId} video={video} selectVideo={selectVideo}/>)
    return <div>{renderedList}</div>
}

const mapStateToProps = (state) => {
    console.log(state)
    return {videos: state.videos}
}

export default connect(mapStateToProps, {fetchVideos, selectVideo})(VideoList)
