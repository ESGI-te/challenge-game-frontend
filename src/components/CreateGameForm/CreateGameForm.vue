<template>
  <form @submit.prevent="onSubmit">
    <label>
      Max. players
      <input v-model="formData.playersMax" name="playersMax" type="text" />
    </label>
    <button type="submit">CreateGame</button>
  </form>
</template>

<script setup>
import router from '@/router';
import { reactive } from 'vue';
import { useCreateGameMutation } from 'queries/game/useCreateGameMutation';

const formData = reactive({
  playersMax: 5
});

const { mutate: createGame } = useCreateGameMutation()

const onSubmit = () => {
  createGame(formData, {
    onSuccess: ({ lobbyId }) => router.push({ name: 'lobby', params: { lobbyId } })
  });
}
</script>

<style scoped></style>
