<template>
  <div className="container max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8">
    <suspense>
      <template #default>
        <time-line />
      </template>
      <template #fallback>
        <SpinnerVue />
      </template>
    </suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SpinnerVue from './components/Spinner.vue';
import TimeLine from './components/TimeLine.vue';

export default defineComponent({
  name: 'App',
  components: {
    TimeLine,
    SpinnerVue,
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
