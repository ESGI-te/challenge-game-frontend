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

<script setup>
import router from '@/router';
import useLoginMutation from 'queries/auth/useLoginMutation'
import { reactive } from 'vue'

const formData = reactive({
  username: '',
  password: ''
})

const { mutate: login } = useLoginMutation()

const onSubmit = () => {
  login(formData, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      router.push({ name: 'home' });
    }
  })
}
</script>

<style scoped></style>
