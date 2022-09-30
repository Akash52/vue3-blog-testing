<template>
  <div
    class="text-2xl text-gray-800 flex justify-center mt-28 -mb-20 font-semibold"
  >
    Post Writer
  </div>
  <PostWriter :post="newPost" />
</template>

<script lang="ts">
import PostWriter from './PostWriter.vue';
import { defineComponent } from 'vue';
import { Post } from '@/mocks';
import moment from 'moment';

export default defineComponent({
  components: {
    PostWriter,
  },
  setup() {
    const newPost: Post = {
      id: '-1',
      title: 'New post',
      created: moment(),
    };
    return {
      newPost,
    };
  },
});
</script>

<style></style>
