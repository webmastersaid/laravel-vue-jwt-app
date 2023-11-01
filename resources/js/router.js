import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/Index.vue'), name: 'main.index' },
    { path: '/fruits', component: () => import('./components/Fruit/Index.vue'), name: 'fruit.index' },
    { path: '/fruits/create', component: () => import('./components/Fruit/Create.vue'), name: 'fruit.create' },
    { path: '/fruits/:id/edit', component: () => import('./components/Fruit/Edit.vue'), name: 'fruit.edit' },
    { path: '/fruits/:id', component: () => import('./components/Fruit/Show.vue'), name: 'fruit.show' },
    { path: '/users/login', component: () => import('./components/User/Login.vue'), name: 'user.login' },
    { path: '/users/register', component: () => import('./components/User/Register.vue'), name: 'user.register' },
    { path: '/users/person', component: () => import('./components/User/Person.vue'), name: 'user.person' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router