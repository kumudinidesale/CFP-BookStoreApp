import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomePage.vue'
import Cart from './components/Cart.vue'
import Login from './components/login.vue'
const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
];
const router = createRouter({
     history: createWebHistory(),
     routes
     })
     export default router