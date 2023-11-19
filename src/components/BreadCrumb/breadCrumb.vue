<template>
    <div class="bread-crumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }"><i class="iconfont icon-zhuye"></i></el-breadcrumb-item>
          <el-breadcrumb-item v-for="routeItem in props.currentRoute" :key="routeItem.path">{{routeItem.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['currentRoute'])

</script>

<style scoped>
.bread-crumb {
    padding: 20px 0;
}
.el-breadcrumb {
    display: flex;
    align-items: baseline;
}
</style>