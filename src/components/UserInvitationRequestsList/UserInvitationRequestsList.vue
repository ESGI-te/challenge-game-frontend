<script setup>
import { useUserRequestsQuery } from 'queries/userInvitation/useUserRequestsQuery';
import { useCancelUserInvitationMutation } from 'queries/userInvitation/useCancelUserInvitationMutation';

const { data: requests } = useUserRequestsQuery();
const cancelUserInvitation = useCancelUserInvitationMutation();

const cancelRequest = (invitationId) => {
    cancelUserInvitation.mutate(invitationId);
}

</script>

<template lang="">
    <h2>My requests</h2>
    <div>
        <div v-for="request in requests" :key="request._id">
            <div>You send a friend request to {{ request.recipient.username }}  </div>
            <button @click="cancelRequest(request._id)">Cancel</button>
        </div>
    </div>
</template>

<style lang="">
    
</style>