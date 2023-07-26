<script setup>
import  HistoryLastEntries  from 'components/History/HistoryLastEntries';
import Stats from 'components/Stats'

</script>

<template>
  <h2>Home</h2>
  <Stats :days="7"></Stats>
  <Stats :days="30"></Stats>
  <HistoryLastEntries></HistoryLastEntries>

</template>
