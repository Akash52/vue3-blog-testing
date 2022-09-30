<template>
  <div
    class="bg-blue-100 backdrop-blur-md blur-lg px-4 py-4 container flex justify-center flex-col -mt-6 rounded-md shadow-md"
  >
    <div class="mb-3 bg-purple-100 px-4 py-4 rounded-md shadow-md mt-20">
      <label
        for="exampleFormControlInput1"
        class="form-label inline-block mb-2 font-semibold text-gray-600"
      >
        New Post
      </label>
      <input
        type="text"
        class="form-control block w-full px-3 py-1.5 bg-gray-50 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        placeholder="Content..."
        v-model="title"
      />
    </div>
    <div
      className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 -mt-3"
    >
      <div class="shadow-md px-2 py-2 bg-purple-100 rounded-md">
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 font-semibold text-gray-600"
        >
          Markdown Editor
        </label>
        <div
          class="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 bg-gray-200 outline-none focus:bg-white transition duration-300 text-base font-normal text-gray-800 font-serif cursor-pointer mx-2"
          contenteditable
          ref="contentEditable"
          @input="handleInput"
        />
      </div>

      <div class="shadow-md px-2 py-2 bg-purple-100 rounded-md">
        <label
          for="exampleFormControlInput1"
          class="form-label inline-block mb-2 font-semibold text-gray-600"
        >
          Markdown Preview
        </label>
        <div
          className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24 bg-gray-200"
        >
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '@/mocks';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'PostWriter',
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
  setup(props) {
    const title = ref(props.post.title);
    const content = ref('## Title\nEnter your post content...');
    const contentEditable = ref<HTMLDivElement | null>(null);

    const handleInput = () => {
      if (!contentEditable.value) {
        throw Error('This should never happen');
      }
      content.value = contentEditable.value?.textContent || '';
    };

    onMounted(() => {
      if (!contentEditable.value) {
        throw Error('This should never happen');
      }
      contentEditable.value.textContent = content.value;
    });

    return {
      title,
      content,
      contentEditable,
      handleInput,
    };
  },
});
</script>

<style></style>
