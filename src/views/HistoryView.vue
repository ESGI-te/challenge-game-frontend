<script setup>
import { useHistoryQuery } from 'queries/history/useHistoryQuery';
import  HistoryEntry  from 'components/History/HistoryEntry'


const {data : history} = useHistoryQuery();

</script>

<template>
    <h2 v-if="!history">History Empty</h2>
    <div v-else>
        <h4>History of all games :</h4>
        <div v-for="gameStats in history.games">
            <HistoryEntry :game="gameStats"></HistoryEntry>
        </div>
    </div>
    
</template>

<style scoped lang="css">

</style>