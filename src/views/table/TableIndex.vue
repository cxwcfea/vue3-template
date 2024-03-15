<template>
  <div>
    <h3>Table</h3>
    <div class="card">card</div>
    <router-link to="/dashboard">Go to Dashboard</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.card {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: green;
  color: white;
  margin: 0 auto;
}
</style>
