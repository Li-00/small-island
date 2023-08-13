// 前置导航守卫
export const beforeEach = async () => {
    console.log('前置导航守卫')
    return true
}

// 后置导航守卫
export const afterEach = () => {
    console.log('后置导航守卫')
}
