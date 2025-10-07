<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '1234567890',
        })
      " size="mini" plain>
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain>
      清理用户信息
    </button>
  </view>

  <button @tap="getData" size="mini" plain>
    测试请求
  </button>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()
const getData = async () => {
  const res = await http<string[]>({
    url: '/home/banner',
    method: 'GET',
  })
  console.log(res)
}
</script>

<style lang="scss">
//
</style>
