<script setup>
import { useSendGameInvitationMutation } from 'queries/gameInvitation/useSendGameInvitationMutation'
import { useCancelGameInvitationMutation } from 'queries/gameInvitation/useCancelGameInvitationMutation'
import { useGameInvitationsQuery } from 'queries/gameInvitation/useGameInvitationsQuery'
import { useRouter } from 'vue-router'
import { state } from '@/websockets/friends.ws'
import { state as lobbyState } from '@/websockets/lobby.ws'
import styled from 'vue3-styled-components'
import avatarIcon from 'public/img/avatar-1.svg'
import Text from 'components/Text'
import { computed } from 'vue'
import Button from '../Button'
import { watchEffect } from 'vue'

const { currentRoute } = useRouter()
const code = currentRoute.value.params.code
const sendInvitation = useSendGameInvitationMutation()
const cancelInvitation = useCancelGameInvitationMutation()
const { data: invitations } = useGameInvitationsQuery()
const isInvited = (friendId) =>
  invitations.value?.some((invitation) => invitation.recipient.id === friendId)
const isInLobby = (friendId) => lobbyState.players?.some((player) => player.id === friendId)
const allFriends = computed(() => [...state.online, ...state.offline])
const isOnline = (friendId) => state.online?.some((player) => player.id === friendId)

const handleCancelInvitation = (friendId) => {
  const invitation = invitations.value?.find((invitation) => invitation.recipient.id === friendId)
  cancelInvitation.mutate(invitation?._id)
}

const handleSendInvitation = (userId) => {
  sendInvitation.mutate({ userId, code })
}

const UserCard = styled.div`
  border: 2px solid var(--black);
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  row-gap: 0.5rem;
  background-color: var(--white);

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    max-width: 400px;
  }
`
const AvatarWrapper = styled.div`
  background-color: var(--yellow);
  max-width: 80px;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`
const CancelButton = styled(Button)`
  background-color: var(--red);
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  max-width: 100%;
  overflow-y: auto;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`

watchEffect(() => console.log(allFriends.value))
</script>

<template>
  <Wrapper>
    <Text v-if="allFriends.length === 0">You don't have friends yet</Text>
    <UserCard v-else v-for="friend in allFriends" :key="friend.id">
      <AvatarWrapper>
        <img :src="avatarIcon" alt="avatar" />
      </AvatarWrapper>
      <InfoWrapper>
        <Text bold>{{ friend.username }}</Text>
        <Text :color="isOnline(friend.id) ? '--primary' : '--red'">{{
          isOnline(friend.id) ? 'Online' : 'Offline'
        }}</Text>
      </InfoWrapper>
      <div v-if="isInvited(friend.id)">
        <CancelButton @click="handleCancelInvitation(friend.id)">Cancel</CancelButton>
      </div>
      <Button
        v-else-if="!isInLobby(friend.id) && isOnline(friend.id)"
        @click="handleSendInvitation(friend.id)"
      >
        Invite
      </Button>
    </UserCard>
  </Wrapper>
</template>

<style lang=""></style>
