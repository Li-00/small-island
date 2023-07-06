<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="small-island" />
    <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import '@/assets/css/reset.css' // 重置CSS默认样式

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
