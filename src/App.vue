<!-- 
  一、Vue的文件结构为三段式
    1.template负责页面元素搭建
    2.script负责js代码
    3.style负责css样式
  二、使用其他的vue组件分两步
    1.导入：
      1.1在js方法中import组件
      1.2在export default中使用components注册组件
    2.使用：
      在template中使用组件标签
-->
<!-- 在template中使用组件标签 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/contact">Contact</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>

// 在js方法中import组件

export default {
  name: 'App',
  // components: {
  //    // 在export default中使用components注册组件
  //    HomeView: HomeView
  // }
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
