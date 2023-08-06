<template>
    <div class="headNav">
        <div class="headNav-logo">
            <img class="logo" src="./../../assets/logo.png" />
            
            <div class="headNav-logo-name">小岛管家</div>
        </div>
        <div class="headNav-control">
            <div class="headNav-control-icon">
                <div class="icons"><i class="iconfont icon-sousuo"></i></div>
                <div class="icons"><i class="iconfont icon-translate"></i></div>
                <div class="icons"><i class="iconfont icon-shiwutixing-moren"></i></div>
                <div class="icons"><i class="iconfont icon-taiyang"></i></div>
            </div>
            <div class="headNav-control-avatar">
                <el-avatar :size="30" :src="circleUrl" />
            </div>
        </div>
    </div>
</template>

<script src="./headNav.js"></script>
<style src="./headNav.less" lang="less" scoped></style>