import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from './routing/index.js'

createApp(App)
.use(router)
.mount('#app')
