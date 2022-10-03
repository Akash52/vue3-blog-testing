<template>
  <h1>
    {{ post?.title }}
  </h1>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  async setup(props) {
    const store = useStore();
    const id = useRoute().params.id as string;

    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }

    const post = store.getState().posts.all.get(id);

    if (!post) {
      throw Error("Post was not Found");
    }

    return {
      post,
    };
  },
});
</script>
