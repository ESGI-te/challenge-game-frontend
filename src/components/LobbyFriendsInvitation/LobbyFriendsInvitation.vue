<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useInviteToGameMutation } from 'queries/gameInvitation/useInviteToGameMutation';
import { useRouter } from 'vue-router';
// import { useFriendsSocket } from '@/composables/useFriendsSocket';
import { state } from '@/websockets/friends.ws';

const { currentRoute } = useRouter();
const lobbyId = currentRoute.value.params.lobbyId;
const sendInvitation = useInviteToGameMutation();

</script>

<template>
    <div>
        <p v-if="error">{{ error }}</p>
        <div v-else v-for="friend in online" :key="friend.id">
            <p>{{ friend.username }}</p>
            <button @click="sendInvitation.mutate({ userId: friend.id, lobbyId })">Inviter</button>
        </div>
    </div>
</template>

<style lang="">
</style>
