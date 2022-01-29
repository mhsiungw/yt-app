import { SIGN_IN, SIGN_OUT, FETCH_VIDEOS, SELECT_VIDEO } from './types.js'
import youtube from '../apis/youtube'
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId,
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}

export const fetchVideos = (term) => async (dispatch) => {
    try {
        const { data } = await youtube.get('/search', {
            params: {
                q: term,
            },
        })
        dispatch({ type: FETCH_VIDEOS, payload: data.items })
        dispatch({ type: SELECT_VIDEO, payload: data.items[0] })
    } catch (error) {
        console.log(error)
    }
}

export const selectVideo = (video) => {
    return {
        type: SELECT_VIDEO,
        payload: video,
    }
}
