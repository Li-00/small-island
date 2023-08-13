const CONFIG = {
    APP_URL:
        process.env.NODE_ENV == 'development'
            ? '/api'
            : process.env.VUE_APP_SERVER_URL,
}

export default CONFIG
