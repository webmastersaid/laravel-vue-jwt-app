<script>
export default {
    data() {
        return {
            accessToken: null,
        }
    },
    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        }
    },
    mounted() {
        this.getAccessToken()
    },
    updated() {
        this.getAccessToken()
    }
}
</script>
<template>
    <div class="container">
        <ul class="nav">
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'index' }">Index</RouterLink>
            </li>
            <li class="nav-item" v-if="accessToken">
                <RouterLink class="nav-link" :to="{ name: 'fruit.index' }">Fruits</RouterLink>
            </li>
            <li class="nav-item" v-if="!accessToken">
                <RouterLink class="nav-link" :to="{ name: 'user.login' }">Login</RouterLink>
            </li>
            <li class="nav-item" v-if="!accessToken">
                <RouterLink class="nav-link" :to="{ name: 'user.register' }">Register</RouterLink>
            </li>
            <li class="nav-item" v-if="accessToken">
                <RouterLink class="nav-link" :to="{ name: 'user.person' }">You</RouterLink>
            </li>
        </ul>
        <RouterView :key="$route.fullPath" class="pt-5"></RouterView>
    </div>
</template>