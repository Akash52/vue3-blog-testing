<template>Show Post</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup(props) {
    const store = useStore();
    const id = useRoute().params.id as string;
    const post = store.getState().posts.all.get(id);
    console.log(post);
  },
});
</script>
