<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            message: null,
        }
    },
    methods: {
        login() {
            axios.post('/api/auth/login', { email: this.email, password: this.password })
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    this.$router.push({ name: 'user.person' })
                })
                .catch(e => {
                    this.message = e.response.data.error
                })
        }
    }
}
</script>
<template>
    <div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="password">
        </div>
        <div v-if="message" class="mb-3">
            <div class="alert alert-danger" role="alert">
                {{ message }}
            </div>
        </div>
        <div class="mb-3">
            <button @click.prevent="login" type="button" class="btn btn-primary">Login</button>
        </div>
    </div>
</template>