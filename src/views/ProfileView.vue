<script setup>
import styled from 'vue3-styled-components'
import Text from 'components/Text'
import { useUserQuery } from '@/queries/user/useUserQuery'
import { useUserAchievementsQuery } from 'queries/achievement/useUserAchievementsQuery'
import AchievementCard from 'components/AchievementCard'
import { computed } from 'vue'
import { useAchievementsQuery } from '@/queries/achievement/useAchievementsQuery'
import Link from '@/components/Link'

const { data: achievements } = useAchievementsQuery()
const { data: userAchievements } = useUserAchievementsQuery()
const { data: user } = useUserQuery()

const userAchievementsUnlocked = computed(() =>
  userAchievements.value?.achievements?.filter((achievement) => achievement.achieved === true)
)

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  row-gap: 2rem;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding-bottom: 2.5rem;
  }
`
const HeaderWrapper = styled.div`
  width: 100%;
  padding-inline: 1rem;
  padding-top: 2rem;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding-top: 2.5rem;
    padding-inline: 1.5rem;
  }
`
const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  padding: 1rem;
  flex: 1;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
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
  flex: 1;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;
    align-items: start;
    column-gap: 2rem;
    padding-inline: 1.5rem;
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
const AchievementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-left: 1rem;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding-left: 1.5rem;
  }
`
const AchievementsList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  width: 100%;
  overflow-x: auto;
`
const AchievementsTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  padding-right: 1rem;
  column-gap: 0.5rem;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding-right: 1.5rem;
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
    <AchievementsWrapper>
      <AchievementsTitleWrapper>
        <Text variant="h4">My achievements</Text>
        <Link :to="{ name: 'achievements' }">See all</Link>
      </AchievementsTitleWrapper>
      <AchievementsList v-if="userAchievementsUnlocked?.length > 0">
        <AchievementCard
          :as="Link"
          :to="{ name: 'achievements' }"
          v-for="achievement in userAchievementsUnlocked"
          :key="achievement.id"
          :label="achievements?.find((a) => a._id === achievement.id)?.label"
          :description="achievements?.find((a) => a._id === achievement.id)?.description"
          isUnlocked
        /> </AchievementsList
      ><Text v-else>No achievement unlocked yet</Text>
    </AchievementsWrapper>
  </Container>
</template>

<style lang=""></style>
