<template>
  <div class="study-star">
    <h2>学习之星</h2>
    <ul>
      <li v-for="student in students" :key="student.id">
        <span class="student-name">{{ student.name }}</span>
        <span class="student-score">{{ student.score }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface Student {
  id: number;
  name: string;
  score: number;
}

export default defineComponent({
  name: 'StudyStar',
  setup() {
    const students = ref<Student[]>([]);

    const fetchStudents = async () => {
      // 假设有一个 API 可以获取学习之星的数据
      const response = await fetch('/api/study-star');
      students.value = await response.json();
    };

    onMounted(() => {
      fetchStudents();
    });

    return {
      students,
    };
  },
});
</script>

<style scoped>
.study-star {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.student-name {
  font-weight: bold;
}

.student-score {
  color: #4caf50;
}
</style>