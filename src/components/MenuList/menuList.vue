<template>
    <div class="menuList">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <!--遍历路由集合-->
      <template v-for="item in state.routerList" :key="item.path">
        <!--二级展开菜单-->
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0" :key="item.path">
  
          <template #title>
            <i :class="['iconfont',item.icon]"></i>
            <span>{{ item.title }}</span>
          </template>
        
          <sub-menu :chil="item.children" />
        </el-sub-menu>
        <!--一级路由-->
        <template v-else>
          <el-menu-item :index="item.path" :key="item.path">
            <router-link :to="item.path">
                <span>{{ item.title }}</span>
            </router-link>
          </el-menu-item>
        </template>
      </template>
        </el-menu>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { reactive } from 'vue'
  import {routes} from './../../router/router.js'
  import SubMenu from './SubMenu/subMenu.vue'
  
  const state = reactive({
    router: useRouter(),
    routerList: routes,
  })
  const handleOpen = () => {
    // console.log(key, keyPath)
  }
  const handleClose = () => {
    // console.log(key, keyPath)
  }
  </script>
  
  <style scoped>
  .menuList {
    height: 100%;
    background-color: #fff;
  }
  .el-menu {
    border-right: 0;
    width: 200px;
    height: 100%;
  }
  </style>