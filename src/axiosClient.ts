import axios from 'axios'
const client = axios.create({
    baseURL:process.env.PRISM_SERVER_URL,
    timeout: 1000
})
export default client