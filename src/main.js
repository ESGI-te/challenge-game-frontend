import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 /* ms */ * 60 /* sec */ * 60 /* min */ // 60 min
    }
  }
})

app.use(VueQueryPlugin, queryClient)
app.use(pinia)
app.use(router)

app.mount('#app')
