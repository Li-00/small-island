import { createRouter, createWebHashHistory } from 'vue-router'

// 引入路由表
import { AppRoutes } from '@/router/routes'

const AppRouter = createRouter({
    history: createWebHashHistory(),
    routes: AppRoutes,
})

// 引入导航守卫
import { beforeEach, afterEach } from '@/router/guard'
AppRouter.beforeEach(beforeEach)
AppRouter.afterEach(afterEach)

export default AppRouter
