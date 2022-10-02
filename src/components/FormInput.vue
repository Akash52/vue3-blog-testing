<template>
  <form>
    <div
      class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none backdrop-blur-sm"
    >
      <div
        class="relative w-full max-w-md p-5 mx-auto my-6 rounded-md shadow-lg backdrop-blur-xl border-1 shadow-slate-800"
      >
        <div
          class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none opacity-95"
        >
          <div class="relative flex-auto p-6">
            <div>
              <label
                class="block mb-2 text-lg font-medium text-gray-900"
                :name="name"
              >
                {{ name }}
              </label>

              <input
                :type="type"
                class="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2"
                v-model="modelValue"
                @input="handleInput"
              />
              <span
                class="text-xs italic text-red-500 transition duration-300 ease-in-out"
              >
                {{ error }}
              </span>
            </div>
          </div>
          <!-- <div
            class="flex items-center justify-center p-2 border-t border-solid rounded-b border-blueGray-200"
          >
            <button
              class="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="submit"
            >
              {{ modalButton }}
            </button>
            <button
              class="w-full px-6 py-3 ml-2 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none active:bg-red-600 hover:shadow-lg focus:outline-none"
              @click="closeModal()"
            >
              close
            </button>
          </div> -->
        </div>
      </div>
    </div>
    <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
  </form>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  modelValue: string;
  type: string;
  error: string;
}>();
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();
function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>
