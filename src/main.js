import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css' // 重置CSS默认样式

createApp(App).use(router).mount('#app')
