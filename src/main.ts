import { createApp } from 'vue'
import router from '/@/router'
import App from '/@/App.vue'
import '/@/index.css'
import "ant-design-vue/dist/antd.css";
import {
  Button,
  Layout,
  Menu
} from "ant-design-vue";

const app = createApp(App)
app.use(Button)
app.use(Layout).use(Menu)
app.use(router).mount('#app')