<template>
  <div className="border-b border-gray-200">
    {{ post.title }}
    <div class="ml-2 text-slate-700 font-normal">
      {{ post.created.format('Do MMM') }}
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '@/mocks';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimelinePost',
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
  setup(props) {},
});
</script>

<style></style>
