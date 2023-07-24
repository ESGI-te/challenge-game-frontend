import HomeView from 'views/HomeView.vue'
import GameView from 'views/GameView.vue'

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
    path: '/admin',
    name: 'admin',
    component: () => import('views/admin/AdminDashboardView.vue'),
    children: [
      {
        path: '',
        redirect: '/admin/quizz'
      },
      {
        path: 'quizz',
        component: () => import('components/admin/QuizzTab')
      },
      {
        path: 'quizz-theme',
        component: () => import('components/admin/QuizzThemeTab')
      },
      {
        path: 'quizz-theme/add',
        component: () => import('components/admin/QuizzThemeForm')
      },
      {
        path: 'quizz/add',
        component: () => import('components/admin/QuizzForm')
      }
    ]
  },
  {
    path: '/lobby/:code',
    name: 'lobby',
    component: () => import('views/LobbyView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('views/HistoryView.vue')
  },
  // {
  //   path: '/game/:code',
  //   name: 'game',
  //   component: () => import('views/GameView.vue')
  // },
  {
    path: '/create-game',
    name: 'create_game',
    component: () => import('views/CreateGameView.vue')
  },

  {
    path: '/game/:gameId',
    name: 'game',
    component: GameView
  },
  {
    path: '/search-game',
    name: 'search_game',
    component: () => import('views/SearchGameView.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('views/FriendsView.vue'),
    children: [
      {
        path: '',
        redirect: '/friends/list'
      },
      {
        path: 'invitations',
        component: () => import('components/UserInvitationsList')
      },
      {
        path: 'requests',
        component: () => import('components/UserInvitationRequestsList')
      },
      {
        path: 'add',
        component: () => import('components/UserInvitationForm')
      },
      {
        path: 'list',
        component: () => import('components/UserFriendsList')
      }
    ]
  }
]

export default routes
