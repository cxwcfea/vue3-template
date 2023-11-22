<template>
  <div class="flex h-full flex-col item-cent mt-20">
    <el-result icon="error" title="404" sub-title="404 资源不存在">
      <template #sub-title>
        <div class="text-center">{{ timeRef }} 秒后返回首页</div>
      </template>
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { useRouter } from 'vue-router';

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
