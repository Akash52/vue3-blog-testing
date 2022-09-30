<template>
  <div className="border-b border-gray-200">
    <nav class="py-4 flex flex-col space-x-8 justify-center">
      <span class="py-4 flex space-x-8 justify-center">
        <a
          class="border-indigo-500 text-indigo-600 font-normal"
          v-for="period in periods"
          :key="period"
          :class="{
            'border-b-2 font-medium': period === currentPeriod,
          }"
          :data-test="period"
          @click="setPeriod(period)"
        >
          {{ period }}
        </a>
      </span>
      <timeline-post-vue
        class="px-4 my-1 border py-4 bg-pink-100 hover:bg-white cursor-pointer transition duration-500 flex"
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import moment from 'moment';
import TimelinePostVue from './TimelinePost.vue';
import { useStore } from '../store';
import { Post } from '../mocks';

type Period = 'Today' | 'This Week' | 'This Month';

export default defineComponent({
  name: 'Timeline',
  components: {
    TimelinePostVue,
  },
  async setup() {
    const periods: Period[] = ['Today', 'This Week', 'This Month'];
    const currentPeriod = ref<Period>('Today');
    const store = useStore();
    if (!store.getState().posts.loaded) {
      await store.fetchPosts();
    }
    const allPosts: Post[] = store
      .getState()
      .posts.ids.reduce<Post[]>((acc, id) => {
        const thePost = store.getState().posts.all.get(id);
        if (!thePost) {
          throw Error('This post was not found');
        }
        return acc.concat(thePost);
      }, []);
    const posts = computed(() => {
      return allPosts.filter((post) => {
        if (currentPeriod.value === 'Today') {
          return post.created.isAfter(moment().subtract(1, 'day'));
        }
        if (currentPeriod.value === 'This Week') {
          return post.created.isAfter(moment().subtract(1, 'week'));
        }
        if (currentPeriod.value === 'This Month') {
          return post.created.isAfter(moment().subtract(1, 'month'));
        }
        return false;
      });
    });
    const setPeriod = (period: Period) => {
      currentPeriod.value = period;
    };
    return {
      posts,
      periods,
      currentPeriod,
      setPeriod,
    };
  },
});
</script>

<style></style>
