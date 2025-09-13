<template>
  <div class="best-class">
    <h2>最美班级</h2>
    <ul>
      <li v-for="classItem in bestClasses" :key="classItem.id">
        <span>{{ classItem.name }}</span> - <span>{{ classItem.score }}</span> 分
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'BestClass',
  setup() {
    const bestClasses = ref([]);

    const fetchBestClasses = async () => {
      try {
        const response = await axios.get('/api/best-classes');
        bestClasses.value = response.data;
      } catch (error) {
        console.error('Error fetching best classes:', error);
      }
    };

    onMounted(() => {
      fetchBestClasses();
    });

    return {
      bestClasses,
    };
  },
});
</script>

<style scoped>
.best-class {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.best-class h2 {
  margin-bottom: 15px;
  font-size: 24px;
  color: #333;
}

.best-class ul {
  list-style-type: none;
  padding: 0;
}

.best-class li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.best-class li:last-child {
  border-bottom: none;
}
</style>