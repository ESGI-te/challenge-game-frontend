<template>
    <div class="boutique">
      <h1>Ma Boutique de Jeux</h1>
      <div class="product-list">
        <!-- Jeu 1 -->
        <div class="product-card">
          <h2>Icon 1 </h2>
          <img src="https://via.placeholder.com/200" alt="Jeu 1" />
          <p>Prix : 19.99 €</p>
          <p>Description : blablablablabla</p>
          <button @click="addToCart('Jeu 1')">Ajouter au panier</button>
        </div>
        
        <!-- Jeu 2 -->
        <div class="product-card">
          <h2>Teamplate 2</h2>
          <img src="https://via.placeholder.com/200" alt="Jeu 2" />
          <p>Prix : 24.99 €</p>
          <p>Description : blablablablabla</p>
          <button @click="addToCart('Jeu 2')">Ajouter au panier</button>
        </div>
  
        <!-- Ajouter d'autres jeux ici -->
      </div>
      
      <div class="shopping-cart">
        <h2>Panier d'achat</h2>
        <div v-if="cart.length === 0">Panier vide</div>
        <div v-else>
          <div v-for="(item, index) in cart" :key="index">
            <p>{{ item.name }} - {{ item.price }} €</p>
          </div>
          <p>Total : {{ cartTotal }} €</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [], // Panier d'achat
      };
    },
    computed: {
      cartTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      },
    },
    methods: {
      addToCart(gameName) {
        // Ajoute le jeu au panier (simulé)
        // Dans une application réelle, tu utiliserais un gestionnaire d'état (comme Vuex) pour gérer le panier.
        const game = {
          name: gameName,
          price: Math.random() * 30 + 10, // Prix aléatoire entre 10 et 40
        };
        this.cart.push(game);
      },
    },
  };
  </script>
  
  <style>
  .boutique {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .product-list {
    display: flex;
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .shopping-cart {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  