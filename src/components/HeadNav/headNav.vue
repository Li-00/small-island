<template>
    <div class="headNav">
        <div class="headNav-logo">
            <img class="logo" src="./../../assets/logo.png" />
            
            <div class="headNav-logo-name">小岛管家</div>
        </div>
        <div class="headNav-control">
            <div class="headNav-control-icon">
               <i class="icons iconfont icon-sousuo"></i>
                <i class="icons iconfont icon-translate"></i>
                <i class="icons iconfont icon-shiwutixing-moren"></i>
              <i class="icons iconfont icon-taiyang"></i>
            </div>
            <div class="headNav-control-avatar">
                <el-avatar :size="30" :src="circleUrl" />
            </div>
        </div>
    </div>
</template>

<script src="./headNav.js"></script>
<style src="./headNav.less" lang="less" scoped></style>