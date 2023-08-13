<template>
    <div class="container">
        <div class="container-l">
            <!-- <Menu></Menu> -->
            <div>这是左侧菜单</div>
        </div>
        <div class="container-r">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 100vw;
    height: 100vh;

    .container-l {
        width: 260px;
        height: 100%;
        background-color: #555;
    }
}
</style>
