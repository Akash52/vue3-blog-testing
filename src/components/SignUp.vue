<template>
  <form @submit.prevent="submit">
    <FormInput
      v-model="username"
      name="Username"
      type="text"
      :error="usernameSatus.message"
    />
    <FormInput
      v-model="password"
      name="Password"
      type="password"
      :error="passwordStatus.message"
    />
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import FormInput from './FormInput.vue';
import { required, length, Status, validate } from '../validation';

export default defineComponent({
  name: 'App',
  components: { FormInput },
  setup() {
    const username = ref('username');

    const usernameSatus = computed<Status>(() => {
      return validate(username.value, [
        required(),
        length({ min: 5, max: 10 }),
      ]);
    });

    const password = ref('password');

    const passwordStatus = computed<Status>(() => {
      return validate(password.value, [
        required(),
        length({ min: 10, max: 20 }),
      ]);
    });

    const submit = (evt: Event) => {
      //..
    };

    return {
      passwordStatus,
      usernameSatus,
      username,
      password,
      submit,
    };
  },
});
</script>

<style></style>
