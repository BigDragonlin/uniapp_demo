import { useMemberStore } from '@/stores'
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {
        // 拼接url
        if (!options.url.startsWith('http')) {
            options.url = baseUrl + options.url
        }
        console.log(options.url)
        //设置超时时间
        options.timeout = 10000
        //添加请求头
        options.header = {
            ...options.header,
            "source-client": "miniapp",
        }
        //添加token请求头
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }
    },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)