<template>
    <div class="dialogue">
        <!-- 面包屑 -->
        <BreadCrumb :currentRoute="state.currentRoute"></BreadCrumb>
        <!-- 卡片 -->
        <el-card class="dialogue-content">
            <div class="dialogue-content-title">对话记录列表</div>
            <!-- 搜索列表 -->
            <div class="dialogue-content-query">
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
                      <el-button type="primary" @click="onSubmit"><i class="icons iconfont icon-sousuo"></i>查询</el-button>
                      <el-button @click="onSubmit"><i class="icons iconfont icon-zhongzhi"></i>重置</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <!-- 按钮 -->
            <div class="other-btn">
                <el-button><i class="icons iconfont icon-xiazai"></i>下载</el-button>
            </div>

            <!-- 表格 -->
            <div class="dialogue-content-table">
                <el-table :data="state.tableData" style="width: 100%">
                <el-table-column prop="code" label="对话编号" width="180" />
                <el-table-column prop="name" label="对话名称" width="180" />
                <el-table-column prop="type" label="对话类型" >
                    <template #default="scope" >
                        <span>{{ dialogueType[scope.row.type]}}</span>
                    </template>
                </el-table-column>

                <el-table-column prop="messageNum" label="消息数量" width="180" />
                <el-table-column prop="createTime" label="创建时间" width="180" />
                <el-table-column label="操作" fixed="right">
                    <template #default>
                        <el-button link type="primary" size="small">查看</el-button>
                    </template>
                </el-table-column>
                </el-table>

                <div class="table-pagination">
                    <el-pagination
                        v-model:current-page="state.pageParams.pageNum"
                        :page-size="100"
                        :small="small"
                        layout="total, prev, pager, next"
                        :total="state.pageParams.total"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { onMounted,reactive,computed } from 'vue'
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
    ],
    tableData:[
        {
            id:0,
            code:'223',
            name:'测试1111',
            type:1,
            messageNum:'10',
            createTime:'2021-02-18 18:30'
        }
    ],
    pageParams:{
        pageNum:1,
        pageSize:10,
        total:1
    }
})

let dialogueType = computed(() => {
    return state.dialogueQueryType.map(item=>(item.label))
})

onMounted(()=> {
    state.currentRoute = state.router.currentRoute.matched
    console.log(state.router.currentRoute);
})

//数量改变
const handleSizeChange = () => {}

//改变当前页面
const handleCurrentChange = () => {}
</script>

<style lang="less" scoped>
.dialogue {
    width: 100%;
    margin-left: 20px;
    font-size: 16px;
    .dialogue-content {
        // width: 100%;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;

        .dialogue-content-title {
            display: flex;
            justify-content: space-between;
            line-height: 60px;
            font-size: 20px;
            font-weight: 600;
        }
        .dialogue-content-query {
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 6px solid #f7f8fa;
        }

        .other-btn {
            margin: 10px 0;
            display: flex;
            justify-content: end;
        }

        .dialogue-content-table{
            width: 100%;
            .table-pagination {
                margin-top: 20px;
                display: flex;
                justify-content: end;
            }
        }
        
    }
}

</style>
