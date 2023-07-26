<script setup>

import {useStatsQuery} from 'queries/stats/useStatsQuery'

const props = defineProps({
  days: Number
})

const { data : statsObject } = useStatsQuery(props.days)

</script>

<template>
  <div>
    <h4 class="title">Last {{ props.days }} days statistics : </h4>
    <div class="card">
      <p>Average rank : {{ statsObject?.stats.AverageRank}}</p>
      <p>Average score : {{ statsObject?.stats.AverageScore}}</p>
      <p>Average lives remained : {{ statsObject?.stats.AverageLivesRemained}}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
    border : 1px black solid;
    padding : 10px;
    margin : 10px;    
    width: 200px;
}
.title
{
    padding : 10px;
}
</style>
