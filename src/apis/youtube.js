import axios from 'axios'

const KEY = 'AIzaSyANtqBDVjgsBkC7wV5jzkSEULzvGvYGXLE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    },
})
