<template>
  <div className="border-b border-gray-200">
    <nav class="py-4 flex space-x-8 justify-center">
      <a
        class="border-indigo-500 text-indigo-600 font-normal"
        v-for="period in periods"
        :key="period"
        :class="{
          'border-b-2 font-medium': period === currentPeriod,
        }"
        @click="setPeriod(period)"
      >
        {{ period }}
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

type Period = 'Today' | 'This Week' | 'This Month';

export default defineComponent({
  name: 'Timeline',
  setup() {
    const periods = ['Today', 'This Week', 'This Month'];
    const currentPeriod = ref<Period>('Today');
    const setPeriod = (period: Period) => {
      currentPeriod.value = period;
    };
    return {
      periods,
      currentPeriod,
      setPeriod,
    };
  },
});
</script>

<style></style>
