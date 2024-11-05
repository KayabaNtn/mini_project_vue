import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import i18n from './i18n/index'
import store from './store/index'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(router).use(i18n).use(store).use(ToastService)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
