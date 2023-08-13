let loadingBoolean = null
let loadingNumber = 0

// 引入工具库 lodash
import _ from 'lodash'

// 显示loading
export const showLoading = () => {
    if (loadingNumber == 0) {
        // 开启 loading 显示框
        // loadingBoolean = ElLoading.service({ fullscreen: true })
    }
    loadingNumber++
}

// 在一定时间内，关掉所有的loading
let newHideLoading = _.debounce(() => {
    if (loadingBoolean) {
        // 关闭 loading 显示框
        // loadingBoolean.close()
        loadingBoolean = null
    }
}, 1000)

// 隐藏loading
export const hideLoading = () => {
    loadingNumber && loadingNumber--
    if (loadingNumber == 0) {
        newHideLoading()
    }
}
