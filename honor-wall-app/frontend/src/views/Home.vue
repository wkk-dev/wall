<template>
  <div class="home">
    <h1>荣誉墙</h1>
    <Leaderboard />
    <TopFive />
    <WeeklyStar />
    <StudyStar />
    <BestGroup />
    <BestClass />
    <BestDorm />
    <OtherArea />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Leaderboard from '../components/Leaderboard.vue';
import TopFive from '../components/TopFive.vue';
import WeeklyStar from '../components/WeeklyStar.vue';
import StudyStar from '../components/StudyStar.vue';
import BestGroup from '../components/BestGroup.vue';
import BestClass from '../components/BestClass.vue';
import BestDorm from '../components/BestDorm.vue';
import OtherArea from '../components/OtherArea.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Leaderboard,
    TopFive,
    WeeklyStar,
    StudyStar,
    BestGroup,
    BestClass,
    BestDorm,
    OtherArea,
  },
});
</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
</style>