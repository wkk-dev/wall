<template>
  <div class="admin-view">
    <h1>管理员页面</h1>
    <div class="admin-controls">
      <button @click="fetchData">更新数据</button>
      <button @click="clearData">清空数据</button>
    </div>
    <div class="data-display">
      <h2>当前数据</h2>
      <pre>{{ currentData }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Admin',
  setup() {
    const currentData = ref(null);

    const fetchData = async () => {
      // TODO: 实现数据获取逻辑
      currentData.value = await fetch('/api/data').then(res => res.json());
    };

    const clearData = async () => {
      // TODO: 实现数据清空逻辑
      await fetch('/api/data', { method: 'DELETE' });
      currentData.value = null;
    };

    return {
      currentData,
      fetchData,
      clearData,
    };
  },
});
</script>

<style scoped>
.admin-view {
  padding: 20px;
}

.admin-controls {
  margin-bottom: 20px;
}

button {
  margin-right: 10px;
}
</style>