<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useInventoryQuery } from 'queries/inventory/useInventoryQuery.js'
import { useStripeCheckoutQuery } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSession'
import InventoryForm from 'components/UserInventoryRequests'
// import { computed } from 'vue';
const inventoryId = "64c04901a5e1ab5789778c12";
const url = "succes?session_id=cs_test_a1DEw7Mg6ARadbAEf2WbhIGA3esn6Yiqp0SobOW52a7qleabtTNfk5UEpW"
const {data: inventory} = useInventoryQuery(inventoryId);
// const {data: stripeData} = useStripeCheckoutQuery(url);
// console.log("stripe data : ", stripeData);
const isEmpty = computed( () => inventory.value?.length === 0);


onMounted(() => { // au chargement de la page
	// Récupération de l'item 
    // Vérification de si l'utilisateur à un inventaire
    // Si oui Ajout de l'item à son inventaire
    // Sinon Création de l'inventaire + ajout id inventaire dans l'utilisateur

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