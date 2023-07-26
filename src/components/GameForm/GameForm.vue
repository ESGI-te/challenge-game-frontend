<script setup>
import router from '@/router';
import { useForm } from 'vee-validate'
import { useCreateLobbyMutation } from 'queries/lobby/useCreateLobbyMutation';
import schema from './GameForm.schema';
import InputText from 'components/InputText';
import styled from 'vue3-styled-components';

const { handleSubmit, meta } = useForm({
  initialValues: {
    playersMax: 5,
    questionTime: 30,
  }, validationSchema: schema
});

const createLobby = useCreateLobbyMutation()

const onSubmit = handleSubmit((values) => {
  createLobby.mutate(values, {
    onSuccess: ({ code }) => router.push({ name: 'lobby', params: { code } })
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
    <InputText name="playersMax" label="Nombre de joueurs" type="number" />
    <InputText name="questionTime" label="Nombre de joueurs" type="number" />
    <button :disabled="!meta.valid" type="submit">Create Game</button>
  </Form>
</template>

<style scoped></style>
