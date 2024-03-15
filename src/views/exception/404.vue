<template>
  <div class="flex h-full flex-col item-cent">
    <div>
      <h2>404 资源不存在</h2>
      <div class="text-center">{{ timeRef }} 秒后返回首页</div>
      <van-button type="primary" @click="$router.push('/')">返回首页</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { useRouter } from 'vue-router';
console.log('run');

const router = useRouter();

const timeRef = ref(10);

const { pause } = useIntervalFn(() => {
  if (timeRef.value > 1) {
    timeRef.value--;
  } else {
    pause();
    router.push('/');
  }
}, 1000);
</script>

<style lang="less" scoped></style>
