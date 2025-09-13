<template>
  <div class="best-dorm">
    <h2>最美宿舍</h2>
    <ul>
      <li v-for="dorm in dorms" :key="dorm.id">
        <h3>{{ dorm.name }}</h3>
        <p>积分: {{ dorm.points }}</p>
        <p>成员: {{ dorm.members.join(', ') }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'BestDorm',
  setup() {
    const dorms = ref([]);

    const fetchDorms = async () => {
      try {
        const response = await fetch('/api/best-dorms');
        dorms.value = await response.json();
      } catch (error) {
        console.error('Error fetching dorms:', error);
      }
    };

    onMounted(fetchDorms);

    return {
      dorms,
    };
  },
});
</script>

<style scoped>
.best-dorm {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.best-dorm h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.best-dorm ul {
  list-style-type: none;
  padding: 0;
}

.best-dorm li {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>