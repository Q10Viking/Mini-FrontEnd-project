import { createApp } from 'vue'
import './style.scss'
import FontAwesomeIcon from './ts/fontawesome-icon'
import App from './App.vue'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')