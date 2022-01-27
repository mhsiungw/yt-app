import axios from 'axios'

const KEY = 'AIzaSyBu1IlC_zI2p3Pp8SFf6u5lTzWvCKWkbWo'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    },
})
