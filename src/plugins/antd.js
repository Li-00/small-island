import {
    Button,
    Form,
    Avatar,
    Image,
    Menu,
    Layout
} from 'ant-design-vue'

import { 
    UserOutlined,
    SearchOutlined,

 } from '@ant-design/icons-vue'

// import "ant-design-vue/dist/antd.less"

const Ant = {
    install: Vue => {
        Vue.component('a-Button', Button)
        Vue.component('a-Form', Form)
        Vue.component('a-avatar', Avatar)
        Vue.component('a-image',Image)
        Vue.component('a-menu',Menu)
        Vue.component('a-layout',Layout)

        
        Vue.component('UserOutlined',UserOutlined)
        Vue.component('search-outlined',SearchOutlined)
    }
}

export default Ant