import axios from 'axios'

const require = axios.create()


require.interceptors.request.use(
    (config: any) => {
        config.headers.authorization = localStorage.getItem('token') || ''
        return config
    }, (err) => {
        return Promise.reject(err)
    }
)
require.interceptors.response.use(
    (response: any) => {
        return response
    }, (err) => {
        switch (err.response.status) {
            case 401:
                window.location.href = '/tokenTimeOut'
                break;

            default:
                break;
        }
        return Promise.reject(err)
    }
)

export default require