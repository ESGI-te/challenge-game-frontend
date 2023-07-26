<script setup>
import { useLastEntriesQuery } from 'queries/history/useLastEntriesQuery'
import HistoryEntry from '../HistoryEntry/HistoryEntry.vue'

const { data: lastEntries } = useLastEntriesQuery()
</script>

<template>
  <h4>Last games played : </h4>
  <div class="row">
    <div v-for="gameStats in lastEntries">
      <HistoryEntry :game="gameStats"></HistoryEntry>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
