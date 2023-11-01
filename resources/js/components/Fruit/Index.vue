<script>
import api from '../../api'

export default {
    data() {
        return {
            fruits: []
        }
    },
    methods: {
        getFruits() {
            api.get('/api/auth/fruits/')
                .then(res => {
                    this.fruits = res.data.data
                })
        },
        destroy(id) {
            axios.delete(`/api/fruits/${id}`)
                .then(res => {
                    this.$router.push('fruit.index')
                })
        }
    },
    mounted() {
        this.getFruits()
    }
}
</script>
<template>
    <div>
        <RouterLink class="btn btn-primary" :to="{ name: 'fruit.create' }">Add</RouterLink>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="fruit in fruits">
                    <th>{{ fruit.id }}</th>
                    <td>
                        <RouterLink :to="{ name: 'fruit.show', params: { id: fruit.id } }">{{ fruit.name }}</RouterLink>
                    </td>
                    <td>{{ fruit.price }}</td>
                    <td>
                        <RouterLink :to="{ name: 'fruit.edit', params: { id: fruit.id } }">Edit</RouterLink>
                        <button @click.prevent="destroy(fruit.id)" class="btn btn-outline-danger mx-2">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>