<template>
  <swiper class="banner-swiper" indicator-dots indicator-color="#999" indicator-active-color="#fff" autoplay>
    <swiper-item v-for="item in list" :key="item.id">
      <view>
        <image :src="item.url" @click="handleClick(item.url)"></image>
      </view>
    </swiper-item>
  </swiper>

  <uni-card title="基础卡片" extra="额外信息">
    <text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
  </uni-card>


</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello,  uniapp')

const list = ref([
  { id: '1', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_1.jpg" },
  { id: '2', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_2.jpg" },
  { id: '3', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_3.jpg" },
  { id: '4', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_4.jpg" },
  { id: '5', url: "https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_preview_5.jpg" },
])

const handleClick = (url: string) => {
  uni.previewImage({
    urls: list.value.map(item => item.url),
    current: url
  })
}
</script>

<style>
.banner-swiper,
.banner-swiper image {
  width: 750rpx;
  height: 750rpx;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
