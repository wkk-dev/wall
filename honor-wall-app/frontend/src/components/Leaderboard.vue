<template>
  <div class="leaderboard">
    <h2>积分排行榜</h2>
    <table>
      <thead>
        <tr>
          <th>排名</th>
          <th>姓名</th>
          <th>积分</th>
          <th>年级</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in leaderboard" :key="student.id">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.points }}</td>
          <td>{{ student.grade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Leaderboard',
  setup() {
    const leaderboard = ref([]);

    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/api/leaderboard');
        leaderboard.value = response.data;
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    onMounted(fetchLeaderboard);

    return {
      leaderboard,
    };
  },
});
</script>

<style scoped>
.leaderboard {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>