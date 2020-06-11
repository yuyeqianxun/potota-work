import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8888'
})

axiosInstance.interceptors.response.use(
    res => {
        const result = res.data
        if(result.code===200){
            return result
        }
    },
    err => {
        console.log(err)
    }
)

export default axiosInstance;