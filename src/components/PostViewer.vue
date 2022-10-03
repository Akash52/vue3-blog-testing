<template>
  <router-link
    v-if="canEdit"
    :to="`/posts/${post.id}/edit`"
    class="block w-16 px-4 py-1 mt-24 ml-2 text-white rounded-md bg-gradient-to-r from-green-500 to-blue-500 whitespace-nowrap"
  >
    Edit
  </router-link>
  <h1>
    {{ post?.title }}
  </h1>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  async setup(props) {
    const store = useStore();
    const id = useRoute().params.id as string;

    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }

    const post = store.getState().posts.all.get(id);

    if (!post) {
      throw Error('Post was not Found');
    }

    const canEdit = post.authorId === store.getState().authors.currentUserId;

    return {
      post,
      canEdit,
    };
  },
});
</script>
