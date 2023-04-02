/*
 * @Author: @hjj
 * @Data: Do not edit
 * @LastEditTime: 2023-03-09 22:32:59
 * @LastEditors: @hjj
 * @Description: 
 * @FilePath: \vite-project\src\main.ts
 */
import { createApp } from 'vue'
// 全局引入
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
