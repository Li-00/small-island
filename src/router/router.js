/*
 * @Author: huangxiaomei huangxiaomei@gdgjedu.org
 * @Date: 2023-08-25 08:29:37
 * @LastEditors: huangxiaomei huangxiaomei@gdgjedu.org
 * @LastEditTime: 2023-08-29 09:33:34
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    // {
    //     path:'/',
    //     name:"conversation",
    //     redirect:'/conversation/conversationmanage'
    // },
    {
        path: '/conversation',
        name: 'conversation',
        title: '列表页',
        icon: 'icon-liebiaoye',
        meta: {
            title: '列表页',
        },
        children: [
            {
                path: '/conversationmanage',
                name: 'conversationmanage',
                title: '对话管理',
                meta: {
                    title: '对话管理',
                },
                component: () => import('./../view/conversationLists/conversationLists.vue'),
            },
        ],
    },
    {
        path: '/personalCenter',
        name: 'PersonalCenter',
        title: '个人中心',
        icon: 'icon-liebiaoye',
        meta: {
            title: '个人中心',
        },
        children: [
            {
                path: '/userInfo',
                name: 'UserInfo',
                title: '用户信息',
                meta: {
                    title: '用户信息',
                },
                component: () => import('./../view/personalCenter/userInfo/userInfo.vue'),
            },
            {
                path: '/userSetting',
                name: 'UserSetting',
                title: '用户设置',
                meta: {
                    title: '用户设置',
                },
                component: () => import('./../view/personalCenter/userSetting/userSetting.vue'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
