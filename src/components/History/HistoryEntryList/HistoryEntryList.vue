<script setup>
import { useHistoryQuery } from 'queries/history/useHistoryQuery'
import HistoryEntry from 'components/History/HistoryEntry'
import Text from '@/components/Text'
import styled from 'vue3-styled-components'

const { data: history } = useHistoryQuery()

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  row-gap: 1rem;
`

</script>

<template>
  <h2 v-if="!history">History Empty</h2>
  
    <HistoryList v-else>
      <HistoryEntry v-for="gameStats in history.games" :data="gameStats"></HistoryEntry>
    </HistoryList>

</template>

<style scoped lang="css"></style>
