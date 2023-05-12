import axios from "axios";

const api = async (arg) => {
    const api_key = 'cIMjpOpzspkg7Y8UX6-s4Jt2i6eLupbL1nSu0yu8dZ8'
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${api_key}`
        },
        params: {
            query: arg
        }
    })
    return response.data.results
}

export default api