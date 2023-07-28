<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import LobbyChat from 'components/LobbyChat'
import { useRouter } from 'vue-router'
import LobbyFriendsInvitation from 'components/LobbyFriendsInvitation'
import socket, { state } from '@/websockets/lobby.ws'
import { useLobbyByCodeQuery } from 'queries/lobby/useLobbyByCodeQuery'
import LobbyQuizzThemeVote from 'components/LobbyQuizzThemeVote'
import { useUserQuery } from 'queries/user/useUserQuery'
import LobbyValidation from 'components/LobbyValidation'
import Button from 'components/Button'
import styled from 'vue3-styled-components'
import Text from 'components/Text'
import Modal from 'components/Modal'
import { ref } from 'vue'
import { useResponsive } from 'composables/useResponsive'
import profileIcon from 'public/icons/profile.svg'

const { currentRoute, replace } = useRouter()
const { isDesktopAndUp } = useResponsive()
const code = currentRoute.value.params.code
const { data: lobby } = useLobbyByCodeQuery(code)
const { data: user } = useUserQuery()
const playersConnected = computed(
  () => `${state?.players?.length} / ${lobby.value?.settings?.playersMax}`
)
const isOwner = computed(() => lobby.value?.owner === user.value?._id)
const votedTheme = computed(() => lobby?.value?.votedTheme || state.votedTheme)
const isFriendsInvitationModalOpen = ref(false)

onMounted(() => {
  if (!code) return
  socket.io.opts.query = { code }
  socket.connect()
})

onUnmounted(() => {
  socket.disconnect()
})

const onOpenFriendsInvitationModal = () => {
  isFriendsInvitationModalOpen.value = true
}
const onCloseFriendsInvitationModal = () => {
  isFriendsInvitationModalOpen.value = false
}

const startValidation = () => {
  if (!isOwner.value || !lobby.value || !state.votedTheme) return
  socket.emit('start_validation', { lobbyId: lobby.value._id })
}

const handleLeaveLobby = () => {
  socket.disconnect()
  replace({ name: 'home' })
}

socket.on('game_created', (gameCode) => {
  console.log(gameCode)
  replace({ name: 'game', params: { code: gameCode } })
})

const LeaveButton = styled(Button)`
  width: 100% !important;
  background-color: var(--red) !important;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    width: initial !important;
  }
`
const InviteFriendsButton = styled(Button)`
  width: 100% !important;
  background-color: var(--blue) !important;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    width: initial !important;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 100%;
  height: 100%;
  padding-bottom: 2.5rem;
`
const HeaderStack = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  padding: 2.5rem 1.5rem 0 1.5rem;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > :first-child {
      flex: 1;
    }
  }
`
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;
    column-gap: 1rem;
    align-items: center;
    width: auto;
  }
`
const ThemesStack = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
`
const StartGameButton = styled(Button)`
  width: 100% !important;
  background-color: var(--blue);
`
const PlayersStack = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  padding-inline: 1.5rem;
  margin-top: auto;
`
const Wrapper = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding: 1.5rem;
    display: flex;
    column-gap: 1rem;
  }
`
const PlayersConnected = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`

const Cluster = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`
</script>

<template>
  <Container v-if="state.connected && !state.error && !!lobby">
    <HeaderStack>
      <Cluster
        ><Text variant="h3">N° {{ lobby.invitation_code }}</Text>
        <PlayersConnected>
          <Text variant="h4">{{ playersConnected }}</Text>
          <img :src="profileIcon" alt="profile icon" /> </PlayersConnected
      ></Cluster>

      <ButtonsWrapper>
        <InviteFriendsButton @click="onOpenFriendsInvitationModal">
          Invite friends
        </InviteFriendsButton>
        <LeaveButton @click="handleLeaveLobby"> Leave </LeaveButton>
      </ButtonsWrapper>
    </HeaderStack>
    <Wrapper>
      <ThemesStack>
        <Text variant="h3">Themes</Text>
        <LobbyQuizzThemeVote v-if="!!lobby?.themes" :themes="lobby?.themes" />
      </ThemesStack>
      <LobbyChat v-if="isDesktopAndUp" />
    </Wrapper>

    <PlayersStack>
      <StartGameButton v-if="isOwner" :disabled="!votedTheme" @click="startValidation"
        >Start game</StartGameButton
      >
    </PlayersStack>
    <!-- <div v-if="state.gameCreationInProgress">
			<h2>The game's about to get started...</h2>
		</div>
		<div v-else>
			<div>
				notification : {{ state.notification }}
				players connected : {{ playersConnected }}
			</div>
			<LobbyValidation v-if="state.isValidationInProgress" :isOwner="isOwner" :lobbyId="lobby.id" />
			<button v-else-if="isOwner" :disabled="!votedTheme" @click="startValidation">Start game</button>
			<LobbyChat />
		</div> -->
    <Modal :isOpen="state.isValidationInProgress" title="Are you ready?">
      <LobbyValidation :isOwner="isOwner" :lobbyId="lobby.id" />
    </Modal>
    <Modal
      :isOpen="isFriendsInvitationModalOpen"
      :onClose="onCloseFriendsInvitationModal"
      title="Invite friends"
    >
      <LobbyFriendsInvitation />
    </Modal>
  </Container>
  <h2 v-else-if="state.error">{{ state.error }}</h2>
  <h2 v-else>Is loading...</h2>
</template>

<style lang=""></style>
