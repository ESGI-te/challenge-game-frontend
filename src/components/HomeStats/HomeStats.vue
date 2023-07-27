<script setup>
import styled from 'vue3-styled-components'
import { useStatsQuery } from 'queries/stats/useStatsQuery'
import StatsCard from 'components/StatsCard'
import Text from 'components/Text'

const { data: weeklyStats } = useStatsQuery(7)
const { data: mounthlyStats } = useStatsQuery(30)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
`
</script>

<template>
  <Wrapper>
    <Text variant="h4">Your stats</Text>
    <StatsCard v-if="!!weeklyStats" :stats="weeklyStats.stats" />
    <StatsCard v-if="!!mounthlyStats" :stats="mounthlyStats.stats" />
  </Wrapper>
</template>

<style scoped></style>
