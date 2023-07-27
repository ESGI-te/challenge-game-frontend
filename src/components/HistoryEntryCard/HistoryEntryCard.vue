<script setup>
import Text from '@/components/Text'
import styled from 'vue3-styled-components'
import gameIcon from 'public/img/history-game.svg'

const props = defineProps({
  data: Object
})

const formatDate = (dateString) => {
  const dateObj = new Date(dateString)
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = dateObj.getUTCDate().toString().padStart(2, '0')
  const hour = dateObj.getUTCHours().toString().padStart(2, '0')
  const minute = dateObj.getUTCMinutes().toString().padStart(2, '0')
  return `${month}/${day} - ${hour}h:${minute}`
}

const Card = styled.div`
  height: 6.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem 1.5rem;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  border: 2px solid #000;
  background: var(--white);
`
const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    height: 5rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const GameIcon = styled.img`
  padding: 0.375rem;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  background: var(--black, #111);
`
</script>

<template>
  <Card>
    <GameIcon :src="gameIcon" />
    <GameInfo>
      <Text variant="h4"> Game : {{ formatDate(data.createdAt) }} </Text>
      <Text variant="p"> Score : {{ data.score }}</Text>
    </GameInfo>
  </Card>
</template>

<style scoped></style>
