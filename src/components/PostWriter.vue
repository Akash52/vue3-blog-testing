<template>
  <div class="flex justify-center mt-24">
    <div class="mb-3 xl:w-96 bg-blue-100 px-4 py-8 rounded-md shadow-md">
      <label
        for="exampleFormControlInput1"
        class="form-label inline-block mb-2 text-gray-700"
      >
        New Post
      </label>
      <input
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Example label"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from "@/mocks";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "PostWriter",
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
});
</script>

<style></style>
