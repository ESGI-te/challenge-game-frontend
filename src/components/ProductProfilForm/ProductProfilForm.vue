<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import stripe from 'utils/stripe';
import styled from 'vue3-styled-components';
const CardContainer = styled.div`

`;
const Card = styled.div`
  //display: flex;
  //flex-direction: row;
   width: 100%;
   max-width: 12rem;
  heigth: 12 rem;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  border: 1px solid #ccc;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;card-title
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img{
    align-content: center;
  }
`;

const cards1 = [
  { id: 1, image: '../../public/icons/profil/icon1.png' },
  { id: 2, image: '../../public/icons/profil/icon2.png' },
  { id: 3, image: '../../public/icons/profil/icon3.png'},
  { id: 4, image: '../../public/icons/profil/icon4.png'},
  { id: 5, image: '../../public/icons/profil/icon5.png'},
];
const cards2 = [
  { id: 1, image: '../../public/icons/profil/icon6.png' },
  { id: 2, image: '../../public/icons/profil/icon7.png'},
  { id: 3, image: '../../public/icons/profil/icon8.png'},
  { id: 4, image: '../../public/icons/profil/icon2.png' },
  { id: 5, image: '../../public/icons/profil/icon9.png'},
];

</script>

<template>
  <div class="grid-containerContent">
  <div class="grid-containerLine1">
    <div v-for="card in cards1" :key="card.id" class="grid-item">
      <Card>
        <img :src="card.image" alt="Card Image" />
      </Card>
    </div>
  </div>
  
  <div class="grid-containerLine2">
    <div v-for="card in cards2" :key="card.id" class="grid-item">
      <Card>
        <img :src="card.image" alt="Card Image" />
      </Card>
    </div>
  </div>
</div>
</template>

<style scoped>
.grid-containerLine2{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.grid-containerLine1{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.grid-containerContent {
  display: contents;
  flex-wrap: wrap; /* Permet aux éléments de passer à la ligne lorsque l'espace est insuffisant */
  justify-content: center; /* Centre les éléments horizontalement */
}
.grid-item {
  flex-basis: calc(20% - 20px); /* Largeur de chaque élément (20% avec un espace de 20px entre eux) */
  margin: 10px; /* Espace entre les éléments */
  max-width: 200px; /* Limite la largeur des éléments */
}


</style>
