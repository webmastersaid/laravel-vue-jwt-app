import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/Fruit/Index.vue'), name: 'fruit.index' },
    { path: '/users/login', component: () => import('./components/User/Login.vue'), name: 'user.login' },
    { path: '/users/register', component: () => import('./components/User/Register.vue'), name: 'user.register' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router