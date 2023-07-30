<template>
    <div class="menu-list">
        <a-menu
        :selectedKeys="current"
        mode="inline"
        >
        <template v-for="(menuItem) in menuLists" :key="menuItem.name">
            <a-menu-item v-if="!menuItem.children" :key="menuItem.path">
                <!-- <router-link :to="subItem.path"> -->
                        <div>
                            <div></div>
                            <div>{{menuItem.title}}</div>
                        </div>
                    <!-- </router-link> -->
            </a-menu-item>
            <sub-menu v-else :key="menuItem.key" :menu-info="menuItem" />
        </template>
        <!-- <a-sub-menu :label="menuItem.title" v-for="(menuItem,idx) in menuLists" :key="menuItem.name" :index="idx">
            <div>
                <div></div>
                <div>{{menuItem.title}}</div>
            </div>
            <template v-if="menuItem.subItem">
                <a-menu-item v-for="(subItem,subIdx) in menuItem.subItem" :key="subItem.name" :index="subIdx">
                    <router-link :to="subItem.path">
                        <div>
                            <div></div>
                            <div>{{subItem.title}}</div>
                        </div>
                    </router-link>
            </a-menu-item>
            </template>
            
        </a-sub-menu> -->
    </a-menu>
    </div>
</template>

<script src="./menuList.js"></script>
<style src="./menuList.less" lang="less" scoped></style>