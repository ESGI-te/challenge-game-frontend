<script setup>
</script>

<template>
    <h2>Friends and invitations</h2>
    <div>
        <div>
            <router-link to="/friends/requests">My requests</router-link>
        </div>
        <div>
            <router-link to="/friends/invitations">Invitations</router-link>
        </div>
        <div>
            <router-link to="/friends/add">Add a friend</router-link>
        </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<style lang="">
    
</style>