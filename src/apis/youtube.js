import axios from "axios"

const key = process.env.REACT_APP_YT_API_KEY

export default axios.create({
    baseURL : '//www.googleapis.com/youtube/v3',
    params : {
        key : key,
        part : 'snippet',
        maxResults: 5
    }
})