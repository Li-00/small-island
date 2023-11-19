<!--
 * @Author: huangxiaomei huangxiaomei@gdgjedu.org
 * @Date: 2023-08-25 08:29:37
 * @LastEditors: huangxiaomei huangxiaomei@gdgjedu.org
 * @LastEditTime: 2023-08-25 17:32:23
 * @Description: 
-->
<template>
	<div class="menuList">
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
		>
			<!--遍历路由集合-->
			<template v-for="item in state.routerList" :key="item.path">
				<!--二级展开菜单-->
				<el-sub-menu
					v-if="item.children && item.children.length > 0"
					:key="item.path"
					:index="item.path"
				>
					<template #title>
						<i :class="['menu-icon', 'iconfont', item.icon]"></i>
						<span>{{ item.title }}</span>
					</template>

					<sub-menu :chil="item.children" />
				</el-sub-menu>
				<!--一级路由-->
				<template v-else>
					<el-menu-item :key="item.path" :index="item.path" @click="toPath(item.name)">
						<!-- <router-link
							:style="{ textDecoration: none, color: '#000' }"
							:to="item.path"
						> -->
						<span>{{ item.title }}</span>
						<!-- </router-link> -->
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { reactive } from "vue"
import { routes } from "./../../router/router.js"
import SubMenu from "./SubMenu/subMenu.vue"

const state = reactive({
	router: useRouter(),
	routerList: routes
})

const toPath = name => {
	state.router.push({ name: name })
}
const handleOpen = () => {
	// console.log(key, keyPath)
}
const handleClose = () => {
	// console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.menuList {
	height: 100vh;
	background-color: #fff;
	.menu-icon {
		margin-right: 20px;
	}
}

.el-menu {
	border-right: 0;
	width: 240px;
	height: 100%;
}
</style>
