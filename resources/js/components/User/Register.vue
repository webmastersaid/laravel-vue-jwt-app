<script>
export default {
    data() {
        return {
            user: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            },
            message: null,
        }
    },
    methods: {
        register() {
            axios.post('/api/users/register', this.user)
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
            <label for="name" class="form-label">Name</label>
            <input v-model="user.name" type="text" class="form-control" id="name" placeholder="Bob">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="user.email" type="email" class="form-control" id="email" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="user.password" type="password" class="form-control" id="password" placeholder="password">
        </div>
        <div class="mb-3">
            <label for="password_confirmation" class="form-label">Confirm password</label>
            <input v-model="user.password_confirmation" type="password" class="form-control" id="password_confirmation"
                placeholder="confirm password">
        </div>
        <div v-if="message" class="mb-3">
            <div class="alert alert-danger" role="alert">
                {{ message }}
            </div>
        </div>
        <div class="mb-3">
            <button @click.prevent="register" type="button" class="btn btn-primary">Register</button>
        </div>
    </div>
</template>