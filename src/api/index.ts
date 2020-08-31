import axios from 'axios'
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import * as NProgress from 'nprogress'
import * as Cookies from 'js-cookie';
import { message } from 'antd'
import constant from './api';

const { dev_base_url } = constant

axios.defaults.timeout = 10000
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?
    'prod_base_url' : 'dev_base_url'

let startFlag: Boolean = false // loading start

export default function Axios(url: any, method: any, data: any) {
    // 请求拦截器
    axios.interceptors.request.use((config: AxiosRequestConfig) => {
        if (config.data && config.data.showLoading) {
            startFlag = true
            NProgress.start()
        }

        // 添加请求 access_token
        if (Cookies.get('auth')) {
            config.headers.Authorization = Cookies.get('auth')
        }
        if (config.params) config.params._t = Date.now()

        return config
    }, (err: AxiosError) => {
        if (startFlag) {
            startFlag = false
            NProgress.done()
        }
        return Promise.reject(err)

    })

    // 响应拦截
    axios.interceptors.response.use((res: AxiosResponse) => {
        if (startFlag) {
            startFlag = false
            NProgress.done()
        }
        return res.data
    }, (err: AxiosError) => {
        if (err.response && (err.response.status + '').startsWith('5')) {
            message.error('请求出错！')
        }
        if (startFlag) {
            startFlag = false
            NProgress.done()
        }
        return Promise.reject(err)
    })

    // 请求方法
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: method,
            data: data || {},
        })
        .then((res) => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}
