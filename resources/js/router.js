import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/Index.vue'), name: 'index' },
    { path: '/fruits', component: () => import('./components/Fruit/Index.vue'), name: 'fruit.index' },
    { path: '/fruits/create', component: () => import('./components/Fruit/Create.vue'), name: 'fruit.create' },
    { path: '/fruits/:id/edit', component: () => import('./components/Fruit/Edit.vue'), name: 'fruit.edit' },
    { path: '/fruits/:id', component: () => import('./components/Fruit/Show.vue'), name: 'fruit.show' },
    { path: '/users/login', component: () => import('./components/User/Login.vue'), name: 'user.login' },
    { path: '/users/register', component: () => import('./components/User/Register.vue'), name: 'user.register' },
    { path: '/users/person', component: () => import('./components/User/Person.vue'), name: 'user.person' },
    { path: '/:pathMatch(.*)*', component: () => import('./components/NotFound.vue'), name: '404' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const ACCESS_TOKEN = localStorage.getItem('access_token')
    if (!ACCESS_TOKEN) {
        if (to.name === 'user.login' || to.name === 'user.register' || to.name === 'index') {
            return next()
        } else {
            return next({ name: 'user.login' })
        }
    }
    if (to.name === 'user.login' || to.name === 'user.register' && ACCESS_TOKEN) {
        return next({ name: 'user.person' })
    }
    next()
})

export default router