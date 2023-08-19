<script setup>
import styled from 'vue3-styled-components'
import Text from 'components/Text'
import { useUserQuery } from '@/queries/user/useUserQuery'
import Stack from 'components/layout/Stack'
import Cluster from 'components/layout/Cluster'

const { data: user } = useUserQuery()

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding: 1.5rem 2.5rem;
    row-gap: 2rem;
  }
`
const HeaderWrapper = styled.div`
  width: 100%;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
`
const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  padding: 1.5rem;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex: 1;
    height: 100%;
    border: 2px solid var(--black);
    padding: 2.5rem;
  }
`
const AvatarWrapper = styled(Block)`
  background-color: var(--yellow);
`
const InformationWrapper = styled(Block)`
  background-color: var(--blue);
  background-image: url('/img/pen.png');
`
const ResponsiveWrapper = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;
    align-items: start;
    column-gap: 2rem;
  }
`
const InformationInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    row-gap: 1.5rem;
  }
`
const InformationLine = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding-bottom: 1.5rem;
    border-bottom: 2px solid var(--white);

    & > * {
      flex: 1;
    }
  }
`
</script>
<template lang="">
  <Container>
    <HeaderWrapper>
      <Text variant="h3">Profile</Text>
    </HeaderWrapper>
    <ResponsiveWrapper>
      <AvatarWrapper>
        <Text variant="h4">Avatar</Text>
      </AvatarWrapper>
      <InformationWrapper>
        <Text color="--white" variant="h4">Information</Text>
        <InformationInnerWrapper>
          <InformationLine>
            <Text bold color="--white" variant="p">Username: </Text>
            <Text color="--white" variant="p">{{ user?.username }}</Text>
          </InformationLine>
          <InformationLine>
            <Text bold color="--white" variant="p">Email: </Text>
            <Text color="--white" variant="p">{{ user?.email }}</Text>
          </InformationLine>
        </InformationInnerWrapper>
      </InformationWrapper>
    </ResponsiveWrapper>
  </Container>
</template>

<style lang=""></style>
