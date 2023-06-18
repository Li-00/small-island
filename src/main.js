import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 导入 Vue Router 实例

const app = createApp(App)
app.use(router) // 使用 Vue Router 实例
app.mount('#app')
