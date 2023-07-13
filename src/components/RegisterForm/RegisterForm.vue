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

<script setup>
import useRegisterMutation from '../../queries/auth/useRegisterMutation'
import { reactive } from 'vue';

const formData = reactive({
    username: '',
    email: '',
    password: ''
});

const { mutate: register } = useRegisterMutation()

const onSubmit = () => {
  register(formData, {
    onSuccess: () => console.log('Success')
  });
}
</script>

<style scoped></style>
