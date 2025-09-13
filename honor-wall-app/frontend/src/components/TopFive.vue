<template>
  <div class="top-five">
    <h2>前5名成绩排行</h2>
    <ul>
      <li v-for="(student, index) in topFiveStudents" :key="index">
        <span>{{ index + 1 }}. {{ student.name }} - {{ student.score }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'TopFive',
  setup() {
    const topFiveStudents = ref<Array<{ name: string; score: number }>>([]);

    const fetchTopFiveStudents = async () => {
      try {
        const response = await fetch('/api/honor/top-five');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        topFiveStudents.value = await response.json();
      } catch (error) {
        console.error('Error fetching top five students:', error);
      }
    };

    onMounted(() => {
      fetchTopFiveStudents();
    });

    return {
      topFiveStudents,
    };
  },
});
</script>

<style scoped>
.top-five {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-five h2 {
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
}

.top-five ul {
  list-style-type: none;
  padding: 0;
}

.top-five li {
  padding: 8px 0;
  font-size: 18px;
  color: #555;
}
</style>