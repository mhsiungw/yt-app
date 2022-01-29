import {SIGN_IN, SIGN_OUT, FETCH_VIDEOS, SELECT_VIDEO} from './types.js'
import youtube from '../apis/youtube'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const fetchVideos = (term) => async (dispatch) => {
  console.log('fetchVideos')
    const {data} = await youtube.get('/search', {
      params: {
          q: term,
      },
  })  
  console.log(data)
  dispatch({type: FETCH_VIDEOS, payload: data.items})
}

export const selectVideo = (video) => {
  console.log(video)
  return {
    type: SELECT_VIDEO,
    payload: video
  }
}