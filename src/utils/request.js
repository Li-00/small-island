import axios from 'axios'
import CONFIG from '@config'

import { showLoading, hideLoading } from '@utils/loading'

axios.defaults.baseURL = CONFIG.APP_URL

// 添加请求拦截器
axios.interceptors.request.use(
    function (config) {
        // 添加 token
        if (localStorage.getItem('token')) {
            config.headers['Authorization'] = localStorage.getItem('token')
        }
        // 显示 Loading
        if (config.loading) {
            showLoading()
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        if (response.status) {
            hideLoading()
        }
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 对 GET、POST 进行二次封装
const http = {
    get(url, params = {}, config = {}) {
        return new Promise((resolve, reject) => {
            axios({
                url,
                method: 'GET',
                params,
                ...config,
            })
                .then(res => {
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    post(url, data = {}, config = {}) {
        return new Promise((resolve, reject) => {
            axios({
                url,
                method: 'POST',
                data,
                ...config,
            })
                .then(res => {
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}

export default http
