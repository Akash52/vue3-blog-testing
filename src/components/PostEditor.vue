<template>Editor</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  async setup(props) {
    const store = useStore();
    const id = useRoute().params.id as string;
    const router = useRouter();

    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }

    const post = store.getState().posts.all.get(id);

    if (!post) {
      throw Error('Post was not Found');
    }

    if (post.authorId !== store.getState().authors.currentUserId) {
      router.push('/');
    }

    return {
      post,
    };
  },
});
</script>
