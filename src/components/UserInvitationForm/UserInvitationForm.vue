<script setup>
import { ref } from 'vue';

const username = ref('');
import { useInviteUserMutation } from 'queries/userInvitation/useInviteUserMutation';
const { mutate: inviteUser, isLoading } = useInviteUserMutation();

const sendInvitation = () => {
    inviteUser(username.value, {
        onSuccess: () => {
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