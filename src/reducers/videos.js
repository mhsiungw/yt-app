import { FETCH_VIDEOS, SELECT_VIDEO } from '../actions/types.js'

export const fetchVideosReducer = (state = null, action) => {
    if (action.type === FETCH_VIDEOS) {
        return action.payload
    }
    return state
}

export const selectVideoReducer = (state = null, action) => {
    if (action.type === SELECT_VIDEO) {
        return action.payload
    }
    return state
}
