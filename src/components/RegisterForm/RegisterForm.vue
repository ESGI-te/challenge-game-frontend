<script setup>
import router from '@/router';
import { useRegister } from 'queries/auth/useRegister'
import { reactive } from 'vue';

const formData = reactive({
    username: '',
    email: '',
    password: ''
});

const { mutate: register } = useRegister()

const onSubmit = () => {
  register(formData, {
    onSuccess: () => router.push ({ name: 'login' })
  });
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label>
      Username
      <input v-model="formData.username" name="username" type="text" />
    </label>
    <label>
      Email
      <input v-model="formData.email" name="email" type="text" />
    </label>
    <label>
      Password
      <input v-model="formData.password" name="password" type="password" />
    </label>
    <button type="submit">Register</button>
  </form>
</template>

<style scoped></style>
