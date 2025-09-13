<template>
  <div class="best-group">
    <h2>最美集体</h2>
    <ul>
      <li v-for="group in groups" :key="group.id">
        <h3>{{ group.name }}</h3>
        <p>积分: {{ group.points }}</p>
        <p>表现: {{ group.performance }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'BestGroup',
  setup() {
    const groups = ref([]);

    const fetchGroups = async () => {
      // 假设有一个 API 可以获取最美集体的数据
      const response = await fetch('/api/best-groups');
      groups.value = await response.json();
    };

    onMounted(() => {
      fetchGroups();
    });

    return {
      groups,
    };
  },
});
</script>

<style scoped>
.best-group {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.best-group h2 {
  color: #333;
}

.best-group ul {
  list-style-type: none;
  padding: 0;
}

.best-group li {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>