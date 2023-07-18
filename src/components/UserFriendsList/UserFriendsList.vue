<script setup>
import { useUserFriendsQuery } from 'queries/userFriends/useUserFriendsQuery';

const { data: friends } = useUserFriendsQuery();

</script>

<template lang="">
    <h2>My friends</h2>
    <div>
        <div v-for="friend in friends" :key="friend._id">
            <p>{{ friend.username }}</p>
        </div>
    </div>
</template>

<style lang="">
    
</style>