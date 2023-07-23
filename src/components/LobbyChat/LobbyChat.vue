<script setup>
import { ref } from 'vue';
import socket, { state } from '@/websockets/lobby.ws';

const message = ref('');

const sendMessage = () => {
    socket.emit('new_message', message.value);
    message.value = '';
}

</script>

<template lang="">
    <div>
        <p v-for="msg in state.messages" :key="msg">
            {{ msg.player }} : {{ msg.msg }}
        </p>
    </div>
    <form @submit.prevent="sendMessage">
        <input v-model="message" type="text" />
        <button type="submit">Send</button>
    </form>
</template>

<style lang="">
    
</style>