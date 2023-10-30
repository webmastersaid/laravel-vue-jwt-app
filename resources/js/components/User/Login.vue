<script>
export default {
    data() {
        return {
            email: null,
            password: null,
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
        <div class="mb-3">
            <button type="button" class="btn btn-primary">Login</button>
        </div>
    </div>
</template>