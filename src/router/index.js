import Vue from 'vue'
import VueRouter from 'vue-router'
import mail from '../views/mail.vue'
import Escritorio from '../views/Escritorio.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/main',
        name: 'main',
        component: mail
    },
    {
        path: '/',
        name: 'Escritorio',
        component: Escritorio
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue'),
    }, {
        path: '/timeline',
        name: 'timeline',
        component: () =>
            import ('../views/TimeLineFace.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router