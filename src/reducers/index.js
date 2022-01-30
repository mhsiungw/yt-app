import { combineReducers } from 'redux'
import { fetchVideosReducer, selectVideoReducer } from './videoReducers'

export default combineReducers({
    videos: fetchVideosReducer,
    selectedVideo: selectVideoReducer,
})
