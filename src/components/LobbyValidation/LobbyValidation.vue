<script setup>
import { computed } from 'vue';
import socket, { state } from '@/websockets/lobby.ws';
import { useUserQuery } from 'queries/user/useUserQuery';

const props = defineProps({
    isOwner: Boolean,
    lobbyId: String,
})

const { data: user } = useUserQuery();
const hasValidated = computed(() => state?.validatedUsers?.includes(user.value?._id));
const nbValidatedUsers = computed(() => `${state?.validatedUsers?.length} / ${state?.players?.length}`);

const cancelValidation = () => {
    if (!props.isOwner) return;
    socket.emit('cancel_validation', { lobbyId: props.lobbyId });
}

const validate = () => {
    if (hasValidated.value) return;
    socket.emit('validate');
}

</script>

<template>
    <div>
        <h3>Are you ready ?</h3>
        <button v-if="isOwner" @click="cancelValidation">Cancel</button>
        <button v-if="!hasValidated" @click="validate">Validate</button>
        <p v-else>{{ nbValidatedUsers }}</p>
    </div>
</template>

<style lang="">
    
</style>