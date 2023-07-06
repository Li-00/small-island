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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
