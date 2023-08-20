<template>
    <div class="layout">
        <HeadNav></HeadNav>
        <el-container>
            <div class="menu-list">
                <MenuList></MenuList> 
            </div>
            
            <el-container>
                <!-- <el-scrollbar> -->
                    <router-view></router-view>
                <!-- </el-scrollbar> -->
                
            </el-container>
        </el-container>
    </div>
</template>
<script src="./initLayout.js"></script>
<style src="./initLayout.less" lang="less" scoped></style>