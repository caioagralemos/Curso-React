import axios from "axios";
function api(){
    api_key = 'cIMjpOpzspkg7Y8UX6-s4Jt2i6eLupbL1nSu0yu8dZ8'
    axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${api_key}`
        },
        params: {
            query: ''
        }
    }),
}