import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './app/providers/router'
import { startCurrencyRatesUpdates } from './processes/currency-rates'
import './app/styles/variables.scss'
import './shared/config/process'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Start currency rates updates
startCurrencyRatesUpdates()

app.mount('#app') 