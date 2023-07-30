import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/chatlog',
        name: 'ChatLog',
        component: () =>
            import(/* webpackChunkName: "chatlog" */ '@/views/ChatLog.vue'),
    },
    {
        path: '/analysis',
        name: 'Analysis',
        component: () =>
            import(/* webpackChunkName: "analysis" */ '@/views/Analysis.vue'),
    },
    {
        path: '/multiAnalysis',
        name: 'MultiAnalysis',
        component: () =>
            import(
                /* webpackChunkName: "multiAnalysis" */ '@/views/MultiAnalysis.vue'
            ),
    },
    {
        path: '/list',
        name: 'list',
        component: () =>
            import(/* webpackChunkName: "list" */ '@/views/list.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
