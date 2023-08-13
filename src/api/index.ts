import http from '@/utils/request'

import { ILogin } from '@/type/login'

// 用户登录
export const loginByJson = (data: ILogin) => {
    return http.post('/xxx/login', data, {
        loading: true,
    })
}

// 获取用户信息
export const getInfo = () => {
    return http.get('/xxx/getInfo', {}, { loading: true })
}
