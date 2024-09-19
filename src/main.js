import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'

// Crear la instancia de la aplicación
const app = createApp(App)

// Agregar el router a la aplicación
app.use(router)

// Montar la aplicación en el DOM
app.mount('#app')
