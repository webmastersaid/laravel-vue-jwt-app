<script>
import api from '../../api';

export default {
    data() {
        return {
            person: {
                name: null,
                email: null,
            }
        }
    },
    methods: {
        getPerson() {
            api.post('/api/auth/me/')
            .then(res => {
                this.person = res.data
            })
        }
    },
    mounted() {
        this.getPerson()
    }
}
</script>
<template>
    <div>
        <small>Имя</small>
        <div>{{ person.name }}</div>
        <small>Email</small>
        <div>{{ person.email }}</div>
    </div>
</template>