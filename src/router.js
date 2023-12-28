import {createRouter, createWebHashHistory } from 'vue-router';
import RecomendSong from './components/mid_component/RecomendSong.vue'
import FavoriteList from './components/mid_component/FavoriteList.vue'
import Main from './components/Main.vue'
import LoginForm from './components/LoginFrom.vue'
import RegisterForm from './components/RegisterForm.vue'
import Profile from './components/profile_template/Profile.vue'
import axios from 'axios'

const validTokenRouter = 'http://localhost:8000/auth/valid_token'

async function getAccess(from, to, next) {
    var response = null
    try {
        response = await axios.get(validTokenRouter, {
            headers: {
              'Accept': 'application/json'
            },
            withCredentials: true 
        });

        if (response.data != null) {
            next()
        }
    } catch (error) {
        next('/login')
    };
};

async function authCheck(from, to, next) {
    var response = null
    try {
        response = await axios.get(validTokenRouter, {
            headers: {
              'Accept': 'application/json'
            },
            withCredentials: true 
        });

        if (response.data != null) {
            next('/')
        }
        
    } catch (error) {
        next()
    };
}

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
        ],
        beforeEnter: [getAccess]
    },
    { path: '/login', 
        component: LoginForm,
        beforeEnter: [authCheck]
    },
    { path: '/register', 
        component: RegisterForm,
        beforeEnter: [authCheck]
    },
    { path: '/profile', 
        component: Profile,
        beforeEnter: [getAccess]
    },
]

export const router = createRouter({
  history: createWebHashHistory(), routes
})