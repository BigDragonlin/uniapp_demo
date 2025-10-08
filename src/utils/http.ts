import { useMemberStore } from '@/stores'
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {
        // 拼接url
        if (!options.url.startsWith('http')) {
            options.url = baseUrl + options.url
        }
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
        console.log("token", token)
        if (token) {
            options.header.Authorization = token
        }
    },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)


/**
 * 
 * @param options UniApp.RequestOptions
 * @returns Promise
 */

interface Data<T> {
    code: number
    message: string
    result: T
}

/**
 * 
 * @param options UniApp.RequestOptions
 * @returns Data<T>
 */
export const http = <T>(options: UniApp.RequestOptions) => {
    // 返回promise对象
    return new Promise<Data<T>>((resolve, reject) => {
        console.log("aaaa")
        uni.request({
            ...options,
            //响应成功
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Data<T>)
                } else if (res.statusCode === 401) {
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({
                        url: '/pages/index/index'
                    })
                    reject(res)
                } else {
                    //其它错误
                    uni.showToast({
                        title: (res.data as Data<T>).message,
                        icon: 'none'
                    })
                    reject(res)
                }
            },

            //响应失败
            fail: (err) => {
                uni.showToast({
                    title: '网络错误',
                    icon: 'none'
                })
                reject(err)
            }
        })
    })
}