<script setup>
import { useRegister } from 'queries/auth/useRegister'
import { useForm } from 'vee-validate'
import schema from './RegisterForm.schema'
import InputText from 'components/InputText'
import { useRouter } from 'vue-router'
import styled from 'vue3-styled-components'

const router = useRouter()
const { handleSubmit, meta } = useForm({
  initialValues: {
    username: '',
    email: '',
    password: ''
  },
  validationSchema: schema
})
const { mutate: register } = useRegister()

const onSubmit = handleSubmit((values) => {
  register(values, {
    onSuccess: () => router.push({ name: 'login' })
  })
})

const wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`
</script>

<template>
  <wrapper>
    <Form @submit.prevent="onSubmit" @keydown.enter="$event.preventDefault()">
      <h2 class="title">Créer un compte</h2>
      <InputText name="username" label="Username" />
      <InputText name="email" label="Email" type="email" />
      <InputText name="password" label="Password" type="password" />
      <div
        >Vous avez déjà un compte
        <RouterLink :to="'/login'" class="bold"> Se connecter </RouterLink></div
      >
      <button class="primary" :disabled="!meta.dirty || !meta.valid" type="submit">Register</button>
    </Form>
  </wrapper>
</template>

<style scoped>
.primary{
  min-width: 342px;
}
@media screen and (max-width: 630px) {
  h2 {
    max-width: 342px;
  }
}
</style>
