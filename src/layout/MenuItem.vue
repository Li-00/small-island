<template>
    <div>This is MenuItem</div>
    <!-- 有子级路由 -->
    <!-- <el-sub-menu :index="data.path" v-if="hasChildren">
        <template #title>
            <span>{{ data.name }}</span>
        </template>
        <Menu-Item
            v-for="item in data.children"
            :key="item.id"
            :data="item"
        ></Menu-Item>
    </el-sub-menu> -->
    <!-- 没有子级路由 -->
    <!-- <el-menu-item :index="data.path" v-else>
        <span>{{ data.name }}</span>
    </el-menu-item> -->
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// import MenuItem from './MenuItem.vue'

const props = defineProps({
    data: {
        type: Object,
    },
})

const data = ref(props.data)

// const hasChildren = computed(() => {
//     return Array.isArray(data.value.children) && data.value.children.length > 0
// })
</script>

<style></style>
