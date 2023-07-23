<script setup>
import { useAuthStore } from '@/stores/auth.store';
import { useForm } from 'vee-validate'
import schema from './LoginForm.schema';
import InputText from 'components/InputText';
import styled from 'vue3-styled-components';

const { handleSubmit, meta } = useForm({
  initialValues: {
    username: '',
    password: '',
  }, validationSchema: schema
});
const { login } = useAuthStore();

const onSubmit = handleSubmit(values => {
  login(values)
})

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`
</script>

<template>
  <Form @submit.prevent="onSubmit">
    <InputText name="username" label="Username" />
    <InputText name="password" label="Password" type="password" />
    <button :disabled="!meta.dirty || !meta.valid" type="submit">Register</button>
  </Form>
</template>

<style scoped></style>
