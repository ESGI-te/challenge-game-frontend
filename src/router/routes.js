import HomeView from 'views/HomeView.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    meta: { layout: PublicLayout },
    component: () => import('views/LandingView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: PublicLayout },

    component: () => import('views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: PublicLayout },
    component: () => import('views/RegisterView.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: { layout: DefaultLayout },
    component: HomeView
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
    meta: { layout: DefaultLayout },
    component: () => import('views/LobbyView.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: DefaultLayout },
    component: () => import('views/HistoryView.vue')
  },
  {
    path: '/game/:code',
    name: 'game',
    component: () => import('views/GameView.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    meta: { layout: DefaultLayout },
    component: () => import('views/FriendsView.vue'),
    children: [
      {
        path: '',
        redirect: '/friends/list'
      },
      {
        name: 'friends_invitations',
        path: 'invitations',
        component: () => import('components/UserInvitationsList')
      },
      {
        name: 'friends_requests',
        path: 'requests',
        component: () => import('components/UserInvitationRequestsList')
      },
      {
        name: 'friends_list',
        path: 'list',
        component: () => import('components/UserFriendsList')
      }
    ]
  }
]

export default routes
