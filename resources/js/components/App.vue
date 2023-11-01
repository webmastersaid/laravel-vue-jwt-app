<script>
export default {

}
</script>
<template>
    <div class="container">
        <ul class="nav">
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'main.index' }">Index</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'fruit.index' }">Fruits</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'user.login' }">Login</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'user.register' }">Register</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{ name: 'user.person' }">You</RouterLink>
            </li>
        </ul>
        <RouterView class="pt-5"></RouterView>
    </div>
</template>