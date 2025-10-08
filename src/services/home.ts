import { http } from "@/utils/http"
import type { BannerItem } from "@/types/home"

/**
 * 获取首页banner数据
 * @param distributionSite 展示位置，1为首页，2为分类商品页
 * @returns BannerItem[]
 */
const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        url: '/home/banner',
        method: 'GET',
        data: {
            distributionSite
        },
    })
}

export { getHomeBannerAPI }