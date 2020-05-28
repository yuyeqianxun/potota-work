import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err)
    }
)

export default axiosInstance;