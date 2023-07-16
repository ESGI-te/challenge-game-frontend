import HomeView from 'views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('views/RegisterView.vue')
  },
  {
    path: '/lobby/:lobbyId',
    name: 'lobby',
    component: () => import('views/LobbyView.vue')
  },
  {
    path: '/create-game',
    name: 'create_game',
    component: () => import('views/CreateGameView.vue')
  },
  {
    path: '/search-game',
    name: 'search_game',
    component: () => import('views/SearchGameView.vue')
  }
]

export default routes
