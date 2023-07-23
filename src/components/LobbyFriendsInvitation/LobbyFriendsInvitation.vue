<script setup>
import { useInviteToGameMutation } from 'queries/gameInvitation/useInviteToGameMutation';
import { useCancelGameInvitationMutation } from 'queries/gameInvitation/useCancelGameInvitationMutation';
import { useGameInvitationsQuery } from 'queries/gameInvitation/useGameInvitationsQuery';
import { useRouter } from 'vue-router';
import { state } from '@/websockets/friends.ws';

const { currentRoute } = useRouter();
const lobbyId = currentRoute.value.params.lobbyId;
const sendInvitation = useInviteToGameMutation();
const cancelInvitation = useCancelGameInvitationMutation();
const { data: invitations } = useGameInvitationsQuery();

const isInvited = (friendId) => invitations.value?.some(invitation => invitation.recipient.id === friendId);

const handleCancelInvitation = (friendId) => {
    const invitation = invitations.value?.find(invitation => invitation.recipient.id === friendId);
    cancelInvitation.mutate(invitation?._id);
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
            <button v-else @click="sendInvitation.mutate({ userId: friend.id, lobbyId })">Invite</button>
        </div>
    </div>
</template>

<style lang="">
</style>
