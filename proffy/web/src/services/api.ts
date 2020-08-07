import axios from 'axios'

const api = axios.create(
{
    baseURL: 'http://localhost:1712'
})

export default api