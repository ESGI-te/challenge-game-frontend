<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import stripe from 'utils/stripe';
import styled from 'vue3-styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  heigth: 12 rem;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  border: 1px solid #ccc;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;card-title
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  <div class="card-container">
  <div class="card-row">
    <div v-for="card in cards1" :key="card.id" class="card">
      <Card>
        <img :src="card.image" alt="Card Image" />
      </Card>
    </div>
  </div>
  
  <div class="card-row">
    <div v-for="card in cards2" :key="card.id" class="card">
      <Card>
        <img :src="card.image" alt="Card Image" />
      </Card>
    </div>
  </div>
</div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-row {
  display: flex;
  gap: 20px;
}
.card img {
  width: auto;
  height: auto;
  border-radius: 8px;
}
  button {
    background-color: gray ;
    border: solid 1px;
  }
  h3 {
    font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: uppercase;
  }

  button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    /* Styles additionnels au survol du bouton */
    button:hover {
      background-color: #0056b3;
    }

    /* Styles additionnels lorsque le bouton est cliqué */
    button:active {
      transform: translateY(1px);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
</style>
