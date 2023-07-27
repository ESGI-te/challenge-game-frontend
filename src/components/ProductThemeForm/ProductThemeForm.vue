<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import stripe from 'utils/stripe';
import styled from 'vue3-styled-components';

import { ref } from 'vue';
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  heigth: 12 rem;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;card-title
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    height: 80px;
  }
`;

const CardFooter = styled.div`
padding: 0 1.5rem;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-row: auto auto;
  gap: 0.5ch;
  height: 30%;
  align-content: center;
`;

const cards1 = [
  { id: 1,name:'Theme : solar', image: '../../public/icons/themes/theme0.png'},
  { id: 2,name:'Theme : lunar', image: '../../public/icons/themes/theme0.png'},
  { id: 3,name:'Theme : beach', image: '../../public/icons/themes/theme0.png'},
  { id: 4,name:'Theme : city', image: '../../public/icons/themes/theme0.png'},
  { id: 5,name:'Theme : earth', image: '../../public/icons/themes/theme0.png'},
  // { id: 6,name:'Theme : sun', image: '../../public/icons/themes/theme0.png'},
];
const cards2 = [
  { id: 1,name:'Theme : retro', image: '../../public/icons/themes/theme0.png' },
  { id: 2,name:'Theme : rpg', image: '../../public/icons/themes/theme0.png'},
  { id: 3,name:'Theme : typescript', image: '../../public/icons/themes/theme0.png'},
  { id: 4,name:'Theme : music', image: '../../public/icons/themes/theme0.png' },
  { id: 5,name:'Theme : Monster', image: '../../public/icons/themes/theme0.png'},
  // { id: 6,name:'Theme : Snow', image: '../../public/icons/themes/theme0.png'},
];
const currentIndex = ref(0);

const getCardClass = () => {
  const colors = ['yellow-card', 'blue-card', 'green-card'];
  return colors[Math.floor(Math.random() * 3)];
};
</script>

<template>
  <div class="card-container">
  <div class="card-row">
    <div v-for="card in cards1" :key="card.id">
      <Card :class="getCardClass()">
        <img :src="card.image" class="card-image" alt="Card Image" />
        <CardFooter>
          <h1>{{ card.name }}</h1>
        </CardFooter>
      </Card>
    </div>
  </div>
  
  <div class="card-row">
    <div v-for="card in cards2" :key="card.id">
      <Card :class="getCardClass()">
        <img :src="card.image" alt="Card Image" />
        <CardFooter>
          <h1>{{ card.name }}</h1>
        </CardFooter>
      </Card>
    </div>
  </div>
</div>
</template>

<style scoped>

.card-row {
  display: flex;
  gap: 20px;
}


.yellow-card {
  background-color: #FFCC3E;
}
.green-card {
  background-color: #467966;
}
.blue-card {
  background-color: #466D79;
}
</style>
