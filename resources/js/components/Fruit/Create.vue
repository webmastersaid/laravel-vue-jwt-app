<script>
export default {
    data() {
        return {
            fruit: {
                name: null,
                price: null
            }
        }
    },
    methods: {
        store() {
            axios.post('/api/fruits', this.fruit)
                .then(res => {
                    this.$router.push({ name: 'fruit.index' })
                })
        }
    }
}
</script>
<template>
    <div>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="fruit.name" type="text" class="form-control" id="name" placeholder="Banana">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input v-model="fruit.price" type="text" class="form-control" id="price" placeholder="100">
        </div>
        <div class="mb-3">
            <button @click.prevent="store" type="button" class="btn btn-primary">Add</button>
        </div>
    </div>
</template>