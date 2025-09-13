<template>
  <div class="weekly-star">
    <h2>每周优秀之星</h2>
    <ul>
      <li v-for="star in weeklyStars" :key="star.id">
        <img :src="star.photo" alt="Star Photo" class="star-photo" />
        <div class="star-info">
          <h3>{{ star.name }}</h3>
          <p>年级: {{ star.grade }}</p>
          <p>积分: {{ star.points }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'WeeklyStar',
  setup() {
    const weeklyStars = ref([]);

    const fetchWeeklyStars = async () => {
      try {
        const response = await fetch('/api/weekly-stars');
        if (!response.ok) {
          throw new Error('网络错误');
        }
        weeklyStars.value = await response.json();
      } catch (error) {
        console.error('获取每周优秀之星失败:', error);
      }
    };

    onMounted(fetchWeeklyStars);

    return {
      weeklyStars,
    };
  },
});
</script>

<style scoped>
.weekly-star {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.weekly-star h2 {
  margin-bottom: 15px;
  font-size: 24px;
  color: #333;
}

.weekly-star ul {
  list-style-type: none;
  padding: 0;
}

.weekly-star li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.star-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.star-info h3 {
  margin: 0;
  font-size: 18px;
  color: #555;
}

.star-info p {
  margin: 5px 0;
  color: #777;
}
</style>