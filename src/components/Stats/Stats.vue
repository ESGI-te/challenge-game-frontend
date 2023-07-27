<script setup>

import styled from 'vue3-styled-components'
import { useStatsQuery } from 'queries/stats/useStatsQuery'
import StatsCard from 'components/StatsCard';

const { data: weeklyStats } = useStatsQuery(7);
const { data: mounthlyStats } = useStatsQuery(30);


console.log(weeklyStats.value);

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
`

</script>

<template>
  <Wrapper v-if="!!weeklyStats && !!mounthlyStats">
    <StatsCard :stats="weeklyStats.stats"/>
    <StatsCard :stats="mounthlyStats.stats"/>
  </Wrapper>
</template>

<style scoped>
</style>
