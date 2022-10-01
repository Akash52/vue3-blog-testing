<template>
  <div id="modal" :style="style">
    <button @click="hide" class="z-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
  <div className="container max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import { useModal } from './useModal';

export default defineComponent({
  name: 'App',
  components: { Navbar },
  setup() {
    const modal = useModal();

    const style = computed(() => {
      return {
        display: modal.show.value ? 'block' : 'none',
      };
    });
    return {
      style,
      hide: () => {
        modal.hideModal();
      },
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
