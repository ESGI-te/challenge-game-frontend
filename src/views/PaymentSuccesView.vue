<script setup>
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUpdateInventoryMutation} from 'queries/inventory/useUpdateInventoryMutation';

const router = useRouter()

const route = useRoute();
const sessionId = route.fullPath.match(/[^/]+$/)[0];

const updateInventory = useUpdateInventoryMutation();
watchEffect( () => {
    if(!sessionId) return
    updateInventory.mutate({sessionId}, {
        onSuccess: () => {
            router.replace({name :'shop'});
        }
    })
})

</script>
<template>
    <div class="payment-success">
        <h1 class="title">Payment Succes</h1>
        <p v-if="isEmpty">Nouveau Inventaire</p>
        <p v-else> Inventaire Existant</p>
    </div>
</template>
<style lang="">
    
</style>