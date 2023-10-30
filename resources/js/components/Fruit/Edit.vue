<script>
export default {
    data() {
        return {
            fruit: {
                name: null,
                price: null,
            }
        }
    },
    methods: {
        getFruit() {
            axios.get(`/api/fruits/${this.$route.params.id}`)
                .then(res => {
                    this.fruit = res.data.data
                })
        },
        update() {
            axios.patch(`/api/fruits/${this.fruit.id}`, this.fruit)
                .then(res => {
                    this.$router.push({ name: 'fruit.show', params: { id: this.fruit.id } })
                })
        }
    },
    mounted() {
        this.getFruit()
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
            <button @click.prevent="update" type="button" class="btn btn-primary">Update</button>
        </div>
    </div>
</template>