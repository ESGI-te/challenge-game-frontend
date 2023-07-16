<template>
    <h2 v-if="isFetching">Is loading...</h2>
    <form v-else @submit.prevent="onSubmit">
        <input v-model="code" type="text" placeholder="XH7L59T" />
        <button type="submit">Join</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useLobbyByCodeQuery } from 'queries/lobby/useLobbyByCodeQuery'
import { getLobbyByCode } from 'api'
import { useRouter } from 'vue-router';

const router = useRouter();
const code = ref('')
const { refetch, isFetching } = useLobbyByCodeQuery(code.value, {
    queryFn: () => getLobbyByCode(code.value),
    onSuccess: (lobby) =>  router.push({ name: 'lobby', params: { lobbyId: lobby._id } })
});

const onSubmit = () => {
    refetch();
}

</script>

<style lang="">
    
</style>