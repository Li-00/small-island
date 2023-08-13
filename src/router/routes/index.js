import { markRaw } from 'vue'

export const AppRoutes = markRaw([
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    },
    {
        path: '/list',
        name: '列表页',
        component: () =>
            import(/* webpackChunkName: "List" */ '@/views/list/List.vue'),
        children: [
            {
                path: 'session',
                name: '对话管理',
                component: () => import('@/views/list/modules/Session.vue'),
            },
            {
                path: 'robot',
                name: '机器人管理',
                component: () => import('@/views/list/modules/Robot.vue'),
            },
        ],
    },
])
