<template>
    <div class="dialogue">
        <!-- 面包屑 -->
        <BreadCrumb :currentRoute="state.currentRoute"></BreadCrumb>
        <!-- 卡片 -->
        <el-card class="dialogue-content">
            <div>对话记录列表</div>
            <!-- 搜索列表 -->
            <div class="">
                <el-form :inline="true" :model="state.dialogueQuery" class="demo-form-inline">
                    <el-form-item label="对话编号">
                      <el-input v-model="state.dialogueQuery.code" placeholder="请输入编号" clearable />
                    </el-form-item>
                    <el-form-item label="对话名称">
                      <el-input v-model="state.dialogueQuery.name" placeholder="请输入对话名称" clearable />
                    </el-form-item>
                    <el-form-item label="对话类型">
                      <el-select
                        v-model="state.dialogueQuery.type"
                        placeholder="请选择对话类型"
                        clearable
                      >
                        <el-option v-for="typeItem in state.dialogueQueryType" :key="typeItem.value" :label="typeItem.label" :value="typeItem.value" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="创建时间">
                        <el-time-picker
                            v-model="state.dialogueQuery.createTime"
                            is-range
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        />
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">查询</el-button>
                      <el-button @click="onSubmit">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { onMounted,reactive } from 'vue'
import {useRouter} from "vue-router"
import BreadCrumb from './../../components/BreadCrumb/breadCrumb.vue'

const state = reactive({
    router:useRouter(),
    currentRoute:[],
    dialogueQuery:{
        code:'',
        name:'',
        type:0,
        createTime:[]
    },
    dialogueQueryType:[
        {value:0,label:'全部'},
        {value:1,label:'啥'}
    ]
})
onMounted(()=> {
    state.currentRoute = state.router.currentRoute.matched
    console.log(state.router.currentRoute);
})
</script>

<style lang="less" scoped>
.dialogue {
    margin-left: 20px;
    .dialogue-content {
        width: 100%;
        display: flex;
        justify-content: start;
    }
}

</style>
