import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/router.js'

import './assets/iconfont/iconfont.css'

// import Ant from '@plugins/antd'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
