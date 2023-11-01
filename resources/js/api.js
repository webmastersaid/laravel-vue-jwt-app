const api = axios.create()

api.interceptors.request.use(config => {
    if (localStorage.getItem('access_token')) {
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }
    return config
}, error => { })

api.interceptors.response.use(config => {
    if (localStorage.getItem('access_token')) {
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }
    return config
}, error => {
    if (error.response.status) {
        this.$router.push({ name: 'user.login' })
    }
})

export default api