<script setup>
import { ref } from 'vue';
import { useNotificationSocket } from '@/composables/useNotificationSocket';

const username = ref('');
const socket = useNotificationSocket();
import { useInviteUserMutation } from 'queries/userInvitation/useInviteUserMutation';
const { mutate: inviteUser, isLoading } = useInviteUserMutation();

const sendInvitation = () => {
    inviteUser(username.value, {
        onSuccess: () => {
            socket.emit('send_invitation', username.value);
            username.value = '';
        }
    });
}

</script>

<template>
    <form @submit.prevent="sendInvitation">
        <input :disabled="isLoading" v-model="username" type="text" />
        <button :disabled="isLoading" type="submit">Search</button>
    </form>
</template>

<style lang="">
    
</style>