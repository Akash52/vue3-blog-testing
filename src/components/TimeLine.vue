<template>
  <div className="border-b border-gray-200">
    <nav class="py-4 flex space-x-8 justify-center">
      <a
        class="border-indigo-500 text-indigo-600"
        v-for="period in periods"
        :key="period"
      >
        {{ period }}
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Timeline',
  setup() {
    const periods = ['Today', 'This Week', 'This Month'];
    return {
      periods,
    };
  },
});
</script>

<style></style>
