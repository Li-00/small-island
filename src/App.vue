<template>
    <div class="app-content">
        <InitLayout></InitLayout>
    </div>
</template>

<script setup>
import InitLayout from './components/InitLayout/initLayout.vue'

// export default {
//   name: 'App',
//   components: {
//     InitLayout
//   }
// }

const debounce = (fn, delay) => {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay)
    }
}

const _ResizeObserver = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
    constructor(callback) {
        callback = debounce(callback, 16)
        super(callback)
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
div,
p {
    box-sizing: border-box;
}
.app-content {
    width: 100%;
    height: 100%;
    position: relative;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  /* margin-top: 60px; */
/* } */
</style>
