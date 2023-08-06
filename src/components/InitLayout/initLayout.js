import HeadNav from './../HeadNav/headNav.vue'
import MenuList from './../MenuList/menuList.vue'


export default {
    data() {
        return {
            menuLists:[
                {
                    key:'1',
                    title:'仪表盘',
                    name:'yibiao',
                    path:'/yibiao',
                    icon:'',
                    children:[{
                        key:'1.1',
                        title:'111',
                        name:'111',
                        path:'/yibiao/111'
                    }]
                },
                {
                    key:'3',
                    title:'列表页',
                    name:'list',
                    path:'/list',
                    icon:'',
                    children:[{
                        key:'3.1',
                        title:'对话管理',
                        name:'communicationControl',
                        path:'/list/communicationControl'
                    },
                    {
                        key:'3.2',
                        title:'机器人管理',
                        name:'AIControl',
                        path:'/list/AIControl'
                    }
                ]
                }
            ]
        }
    },
    components: {
        HeadNav,
        MenuList
    }
}