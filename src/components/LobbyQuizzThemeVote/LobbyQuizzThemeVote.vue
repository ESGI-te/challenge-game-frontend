<script setup>
import { computed, ref, watch } from 'vue';
import styled from 'vue3-styled-components';
import { useUserQuery } from 'queries/user/useUserQuery';
import socket, { state } from '@/websockets/lobby.ws';

const props = defineProps({
    themes: {
        type: Array,
        required: true
    }
})

const { data: user } = useUserQuery();
const quizzThemes = ref(props.themes);
const hasVoted = computed(() => quizzThemes.value?.some(theme => theme.voters.includes(user.value?._id)));

watch(() => state.themes, (newThemes) => {
    if (!newThemes) return
    quizzThemes.value = newThemes;
})

const handleVote = (id) => {
    if (hasVoted.value) return;
    socket.emit('vote_theme', id);
}

const ThemeCard = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    min-width: 200px;

`;

</script>

<template>
    <div>
        <ThemeCard v-for="theme in quizzThemes" :disabled="hasVoted" @click="handleVote(theme.id)" :key="theme.id">
            <p>{{ theme.name }}</p>
            <span v-if="hasVoted">{{ theme.voters.length }}</span>
        </ThemeCard>
    </div>
</template>

<style lang="">
    
</style>