<template>
  <div
    class="flex flex-col px-4 py-2 transition duration-500 bg-pink-100 border cursor-pointer hover:bg-white"
  >
    <p class="m-0 font-mono text-lg font-medium text-gray-800">
      {{ post.title }}
    </p>
    <div class="-mt-3 text-sm italic font-normal text-gray-600">
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
