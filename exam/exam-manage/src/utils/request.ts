import axios from 'axios'
import { Cookies } from 'react-cookie'
import { message } from 'antd'
const require = axios.create()
const cookies = new Cookies()
require.interceptors.request.use(
    (config: any) => {
        config.headers.authorization = cookies.get('token') || ''
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
            case 400:
                message.error('传递参数有误')
                break;
            case 401:
                window.location.href = '/401'
                break;
            case 402:
                message.error('参数验证有误')
                break;
            case 404:
                window.location.href = '/404'
                break;
            case 500:
                window.location.href = '/500'
                break;
            case 501:
                message.error('数据插入失败')
                break;
            default:
                break;
        }
        return Promise.reject(err)
    }
)

export default require