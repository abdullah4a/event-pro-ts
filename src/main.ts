import { createApp } from 'vue'
import App from '@/App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from '@/quasar-user-options'

// Layout imports
import DefaultLayout from './layouts/defaultLayout.vue'

const app = createApp(App)

// Add Global Components
app.component('defaultLayout', DefaultLayout)

app
.use(Quasar, quasarUserOptions)
.use(store)
.use(router)

app.mount('#app')
