<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
</template>

<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const bannerList = ref(<BannerItem[]>[])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<style></style>
