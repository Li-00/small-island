<template>
    <div class="layout">
        <HeadNav></HeadNav>
        <div class="menu">
            <div class="menu-list">
                <MenuList></MenuList> 
            </div>
            
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script src="./initLayout.js"></script>
<style src="./initLayout.less" lang="less" scoped></style>