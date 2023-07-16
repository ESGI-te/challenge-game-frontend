<template lang="">
    <div>
        <p v-for="msg in messages" :key="msg">
            {{ msg.player }} : {{ msg.msg }}
        </p>
    </div>
    <form @submit.prevent="sendMessage">
        <input v-model="message" type="text" />
        <button type="submit">Send</button>
    </form>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useLobbySocket } from '@/composables/useLobbySocket';

const message = ref('');
const messages = ref([]);

const socket = useLobbySocket();

const sendMessage = () => {
    socket.emit('new_message', message.value);
    message.value = '';
}

watchEffect(() => {
    if (!socket) return

    socket.on('message', (msg) => {
        messages.value.push(msg);
    })
})


</script>

<style lang="">
    
</style>