<template>
    <Menu-Item
        v-for="item in authMenuList"
        :key="item.id"
        :data="item"
    ></Menu-Item>
    <!-- <el-menu
        :default-active="activePath"
        class="el-menu-vertical-demo"
        unique-opened
        router
    >
        <Menu-Item
            v-for="item in authMenuList"
            :key="item.id"
            :data="item"
        ></Menu-Item>
    </el-menu> -->
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import MenuItem from './MenuItem.vue'

const router = useRouter()

let authMenuList = ref([])

let activePath = ref('/home')

watch(
    () => router.currentRoute.value.path,
    newVal => {
        activePath.value = newVal
    },
    {
        immediate: true,
    }
)
</script>

<style></style>
