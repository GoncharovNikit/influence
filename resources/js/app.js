/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import App from './App.vue'
import { createApp } from 'vue'
import router from './router/index'
import components from './components/UI'
import store from './store'

const app = createApp(App)

components.forEach(c => {
    app.component(c.name, c)
})

app
    .use(router)
    .use(store)
    .mount('#app')

