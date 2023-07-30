<template>
    <div>
        <a-layout>
            <HeadNav></HeadNav>
            <a-layout>
                <div class="menu">
                    <MenuList :menu="menuLists"></MenuList> 
                </div>
               
            </a-layout>
        </a-layout>
    </div>
</template>
<script src="./initLayout.js"></script>
<style src="./initLayout.less" lang="less" scoped></style>