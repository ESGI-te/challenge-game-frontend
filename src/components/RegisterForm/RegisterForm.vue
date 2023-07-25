<script setup>
import { useRegister } from 'queries/auth/useRegister'
import { useForm } from 'vee-validate'
import schema from './RegisterForm.schema';
import InputText from 'components/InputText';
import { useRouter } from 'vue-router';
import styled from 'vue3-styled-components';

const router = useRouter();
const { handleSubmit, meta } = useForm({
  initialValues: {
    username: '',
    email: '',
    password: '',
  }, validationSchema: schema
});
const { mutate: register } = useRegister()

const onSubmit = handleSubmit(values => {
  register(values, {
    onSuccess: () => router.push({ name: 'login' })
  });
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
  <Form @submit.prevent="onSubmit" @keydown.enter="$event.preventDefault()">
    <InputText name="username" label="Username" />
    <InputText name="email" label="Email" type="email" />
    <InputText name="password" label="Password" type="password" />
    <button :disabled="!meta.dirty || !meta.valid" type="submit">Register</button>
  </Form>
</template>
