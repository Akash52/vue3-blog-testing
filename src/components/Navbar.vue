<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-blur-md shadow-md-"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link to="/" class="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7958/7958424.png"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >
          Vue3 Blog Testing
        </span>
      </router-link>
      <div class="flex md:order-2">
        <router-link to="/posts/new">
          <button
            type="button"
            class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Post
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
