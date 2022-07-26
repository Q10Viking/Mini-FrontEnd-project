import { createApp } from 'vue'
import './style.scss'
import FontAwesomeIcon from './ts/fontawesome-icons'
import App from './App.vue'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
