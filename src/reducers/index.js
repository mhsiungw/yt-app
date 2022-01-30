import { combineReducers } from 'redux'
import { fetchVideosReducer, selectVideoReducer } from './videoReducers'
import { authReducer } from './authReducers'

export default combineReducers({
    videos: fetchVideosReducer,
    selectedVideo: selectVideoReducer,
    auth: authReducer,
})
