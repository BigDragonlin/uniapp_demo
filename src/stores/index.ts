import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

//创建pinia实例
const pinia = createPinia()
//使用持久化储存插件
pinia.use(persist)

export default pinia

export * from './modules/member'