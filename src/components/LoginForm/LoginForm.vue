<script setup>
import { useAuthStore } from '@/stores/auth.store';
import { reactive } from 'vue'

const formData = reactive({
  username: '',
  password: ''
})
const { login } = useAuthStore();

const onSubmit = () => {
  login(formData);
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <label>
      Username
      <input v-model="formData.username" name="username" type="text" />
    </label>
    <label>
      Password
      <input v-model="formData.password" name="password" type="password" />
    </label>
    <button type="submit">Login</button>
  </form>
</template>

<style scoped></style>
