<template>
    <LoginForm />
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.store";
import LoginForm from "components/LoginForm";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { isAuthenticated } = useAuthStore();

onBeforeMount(() => {
    if (isAuthenticated) {
        router.replace({ name: 'home' });
    }
})
</script>

<style scoped>

</style>