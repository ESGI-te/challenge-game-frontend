<script setup>
import { useUserInvitationsQuery } from 'queries/userInvitation/useUserInvitationsQuery';
import { useAcceptUserInvitationMutation } from 'queries/userInvitation/useAcceptUserInvitationMutation';
import { useDeclineUserInvitationMutation } from 'queries/userInvitation/useDeclineUserInvitationMutation';

const { data: invitations } = useUserInvitationsQuery();

const acceptUserInvitation = useAcceptUserInvitationMutation();
const declineUserInvitation = useDeclineUserInvitationMutation();

</script>

<template lang="">
    <h2>Invitations</h2>
    <div>
        <div v-for="invitation in invitations" :key="invitation._id">
            <div>{{ invitation.inviter.username }} would like to add you as a friend</div>
            <div>
                <button @click="declineUserInvitation.mutate(invitation._id)">Decline</button>
                <button @click="acceptUserInvitation.mutate(invitation._id)">Confirm</button>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>