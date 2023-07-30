import { createApp } from 'vue'
import App from './App.vue'

// import 'ant-design-vue/dist/antd.less'
import Ant from '@plugins/antd'

const app = createApp(App)
app.use(Ant)
app.mount('#app')
