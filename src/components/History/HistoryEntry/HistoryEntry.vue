<script setup>
const props = defineProps({
  game: Object
})
</script>

<template>
  <div>
    <div class="card">
      <p>Rank : {{ game.rank }}</p>
      <p>Score : {{ game.score }}</p>
      <p>Lives remained : {{ game.lives }}</p>
      <!-- <small>{{ game.createdAt }}</small> -->
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
</style>
