<!--
 * @Author: huangxiaomei huangxiaomei@gdgjedu.org
 * @Date: 2023-08-25 08:29:37
 * @LastEditors: huangxiaomei huangxiaomei@gdgjedu.org
 * @LastEditTime: 2023-09-01 14:20:06
 * @Description: 
-->
<template>
    <div class="layout">
        <HeadNav></HeadNav>
        <el-container style="height: 100vh">
            <div class="menu-list">
                <MenuList></MenuList>
            </div>

            <el-container style="height: 100vh">
                <el-scrollbar height="100%">
                    <!-- <div class="cantaint"> -->
                    <router-view></router-view>
                    <!-- </div> -->
                </el-scrollbar>
            </el-container>
        </el-container>
    </div>
</template>
<script src="./initLayout.js"></script>
<style lang="scss" scoped>
.layout {
    height: 100%;
    background-color: #f7f8fa;
    padding: 20px 20px 0;

    .menu {
        width: 100%;
        height: 100%;
        display: flex;
        .menu-list {
            height: 100vh;
            background-color: #fff;
        }
        .content {
            width: calc(100vw - 200px);
        }
    }
}
</style>
