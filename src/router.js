import {createRouter, createWebHashHistory } from 'vue-router';
import RecomendSong from './components/mid_component/RecomendSong.vue'
import FavoriteList from './components/mid_component/FavoriteList.vue'
import LeftContents from './components/mid_component/LeftContents.vue'
import NavBar from './components/top_com/NavBar.vue'
import AudioReactBar from './components/bottom/AudioReactBar.vue'
import Popup from './components/mid_component/Popup.vue'

const routes = [
    { path: '/', 
        components: {
            topBar: NavBar,
            rightContents: RecomendSong,
            leftContents: LeftContents,
            bottomBar: AudioReactBar,
            popUp: Popup,
        },
    },
    // { path: '/favorList', component: FavoriteList },
]

export const router = createRouter({
  history: createWebHashHistory(), routes
})