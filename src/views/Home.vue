<template>
    <div>
        <router-link to="/chatlog">跳转到聊天记录展示页</router-link>
        <router-link to="/analysis">跳转到分析页</router-link>
        <router-link to="/multiAnalysis">跳转到多维分析页</router-link>
        <router-link to="/list">跳转到机器人列表页</router-link>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 300px;
    margin: 0 auto;

    a {
        margin-bottom: 20px;
        font-size: 18px;
    }
}
</style>
