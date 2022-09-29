<template>
  <div className="container max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 shadow-lg">
    <time-line />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimeLine from './components/TimeLine.vue';

export default defineComponent({
  name: 'App',
  components: {
    TimeLine,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
