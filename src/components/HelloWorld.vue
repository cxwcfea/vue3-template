<template>
  <h1 text-gray-500>{{ msg }}</h1>

  <div class="card">
    <el-button type="primary" @click="counterStore.increment">count is {{ counterStore.count }}</el-button>
    <p class="read-the-docs">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { useCounterStore } from '@/store/modules/counter';

const counterStore = useCounterStore();

defineProps<{ msg: string }>();

// const count = ref(0);
</script>

<style lang="less" scoped>
.read-the-docs {
  color: @test-color;
}
</style>
