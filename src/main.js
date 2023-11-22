import './assets/main.css'
import {createRouter, createWebHashHistory } from 'vue-router';
import { createApp } from 'vue'

import App from './App.vue'
import RecomendSong from './components/mid_component/RecomendSong.vue'
import FavoriteList from './components/mid_component/FavoriteList.vue'


const routes = [
    { path: '/', component: RecomendSong},
    { path: '/favorList:id', component: FavoriteList },
]

const router = createRouter({
  history: createWebHashHistory(), routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')