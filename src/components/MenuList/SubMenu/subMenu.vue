<template>
    <template v-for="val in props.chil">
      <el-sub-menu :index="val.path" :key="val.path" v-if="val.children && val.children.length > 0">
        <template #title>
          <span>{{ val.title }}</span>
        </template>
        <!--组件递归-->
        <sub-menu :chil="val.children" />
      </el-sub-menu>
      <template v-else>
        <el-menu-item :index="val.path" :key="val.path">
            <router-link style="text-decoration: none;" :to="val.path">
                <span>{{ val.title }}</span>
            </router-link>
        </el-menu-item>
      </template>
    </template>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps(['chil'])
  </script>