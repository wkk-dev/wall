<template>
  <div id="app">
    <header>
      <h1>荣誉墙</h1>
    </header>
    <main>
      <Home />
    </main>
    <footer>
      <p>© 2023 荣誉墙项目</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './views/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #35495e;
  padding: 20px;
  color: white;
}

footer {
  margin-top: 20px;
  padding: 10px;
  background-color: #35495e;
  color: white;
}
</style>