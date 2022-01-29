import {combineReducers} from 'redux'
import {fetchVideosReducer, selectVideoReducer} from './videos'


export default combineReducers({
  videos: fetchVideosReducer,
  selectedVideo: selectVideoReducer
})