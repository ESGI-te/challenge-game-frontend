<script setup>
import Text from '@/components/Text'
import styled from 'vue3-styled-components'
import gameIcon from 'public/img/history-game.svg'
import scoreIcon from 'public/icons/score.svg'
import rankIcon from 'public/icons/rank.svg'

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
  row-gap : 0.3rem;

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

const Icone = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;
    column-gap: 2rem;
  }
`

const row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
`

</script>

<template>
  <Card>
    <GameIcon :src="gameIcon" />
    <GameInfo>
      <Text variant="h4"> Game : {{ formatDate(data.createdAt) }} </Text>
      <Wrapper>
        <row>
          <Icone :src="rankIcon"></Icone>
          <Text variant="p"> Rank : {{ data.rank }} </Text>
        </row>
        <row>
          <Icone :src="scoreIcon"></Icone>
          <Text variant="p"> Score : {{ data.score }} </Text>
        </row>
      </Wrapper>
    </GameInfo>
  </Card>
</template>

<style scoped></style>
