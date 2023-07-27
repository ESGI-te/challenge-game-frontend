<script setup>
import styled from 'vue3-styled-components'
import Text from '@/components/Text'

const props = defineProps({
  stats: Object
})

const toInt = (number) => {
  return parseInt(number)
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--black);
  background: var(--white);
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  gap: 0.5rem;
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;

    justify-content: space-between;
  }
`

const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

const VerticalBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: column;
  }
`

const Line = styled.div`
  height: 0.125rem;
  width: 90%;
  background: var(--black);
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    width: 0.08rem;
    height: 90%;
  }
`
</script>

<template>
  <Wrapper>
    <Card>
      <HorizontalBox>
        <Text variant="title" color="--primary">{{ toInt(stats?.AverageRank) }}</Text>
        <Text variant="p"
          ><b>
            éme au classement en <br />
            moyenne
          </b>
        </Text>
      </HorizontalBox>
      <Line></Line>
      <VerticalBox>
        <Text variant="title" color="--primary"
          >{{ toInt(stats?.AverageScore) }}pt</Text
        >
        <Text variant="p"> <b>de score moyen</b> </Text>
      </VerticalBox>
      <Line></Line>
      <HorizontalBox>
        <Text variant="title" color="--primary">{{
          toInt(stats?.AverageLivesRemained)
        }}</Text>
        <Text variant="p"><b> remaining lives </b> </Text>
      </HorizontalBox>
    </Card>
  </Wrapper>
</template>

<style scoped>
.card {
  border: 1px black solid;
  padding: 10px;
  margin: 10px;
  width: 200px;
}
.title {
  padding: 10px;
}
</style>
