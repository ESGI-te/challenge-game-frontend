<script setup>
import { useAuthStore } from '@/stores/auth.store'
import { useForm } from 'vee-validate'
import schema from './LoginForm.schema'
import InputText from 'components/InputText'
import styled from 'vue3-styled-components'

const { handleSubmit, meta } = useForm({
  initialValues: {
    username: '',
    password: ''
  },
  validationSchema: schema
})
const { login } = useAuthStore()

const onSubmit = handleSubmit((values) => {
  login(values)
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
      <h2 class="title">Veuillez vous connecter</h2>
      <InputText name="username" label="Username" />
      <InputText name="password" label="Password" type="password" />
      <div 
        >Vous n'avez pas de compte
        <RouterLink :to="'/register'" class="bold"> Crée un compte </RouterLink></div
      >
      <button class="primary" :disabled="!meta.dirty || !meta.valid" type="submit">Login</button>
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
