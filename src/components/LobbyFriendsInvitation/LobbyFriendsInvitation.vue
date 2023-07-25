<script setup>
import { useSendGameInvitationMutation } from 'queries/gameInvitation/useSendGameInvitationMutation';
import { useCancelGameInvitationMutation } from 'queries/gameInvitation/useCancelGameInvitationMutation';
import { useGameInvitationsQuery } from 'queries/gameInvitation/useGameInvitationsQuery';
import { useRouter } from 'vue-router';
import { state } from '@/websockets/friends.ws';
import { state as lobbyState } from '@/websockets/lobby.ws';

const { currentRoute } = useRouter();
const code = currentRoute.value.params.code;
const sendInvitation = useSendGameInvitationMutation();
const cancelInvitation = useCancelGameInvitationMutation();
const { data: invitations } = useGameInvitationsQuery();
const isInvited = (friendId) => invitations.value?.some(invitation => invitation.recipient.id === friendId);
const isInLobby = (friendId) => lobbyState.players?.some(player => player.id === friendId)

const handleCancelInvitation = (friendId) => {
    const invitation = invitations.value?.find(invitation => invitation.recipient.id === friendId);
    cancelInvitation.mutate(invitation?._id);
}

const handleSendInvitation = (userId) => {
    sendInvitation.mutate({ userId, code })
}

</script>

<template>
    <div>
        <p v-if="error">{{ error }}</p>
        <div v-else v-for="friend in state.online" :key="friend.id">
            <p>{{ friend.username }}</p>
            <div v-if="isInvited(friend.id)">
                <p>invited</p>
                <button @click="handleCancelInvitation(friend.id)">Cancel</button>
            </div>
            <button v-else-if="!isInLobby(friend.id)" @click="handleSendInvitation(friend.id)">Invite</button>
        </div>
    </div>
</template>

<style lang="">
</style>
