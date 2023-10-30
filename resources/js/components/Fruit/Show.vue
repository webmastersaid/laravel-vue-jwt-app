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
        }
    },
    mounted() {
        this.getFruit()
    }
}
</script>
<template>
    <div>
        <RouterLink :to="{ name: 'fruit.index' }">Go back</RouterLink>
        <h5>{{ fruit.name }}</h5>
        <p>{{ fruit.price }} $</p>
    </div>
</template>