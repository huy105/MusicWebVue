import {createRouter, createWebHashHistory } from 'vue-router';
import RecomendSong from './components/mid_component/RecomendSong.vue'
import FavoriteList from './components/mid_component/FavoriteList.vue'
import Main from './components/Main.vue'

const routes = [
    { path: '/', 
        component: Main,
        children: [
            {
                path: '',
                component: 
                     RecomendSong,
            },
            {
                path: 'favorList',
                component:  FavoriteList,
            },
        ]
    },
    // {
    //     path: '/favorList',
    //     component: {
    //         main: App,
    //     },
    //     children: [
    //         {
    //             path: '',
    //             components: {
    //                 rightContent: FavoriteList,
    //             },
    //         },
    //     ] 
    // }
]

export const router = createRouter({
  history: createWebHashHistory(), routes
})