<template>
    <div class="dialogue">
        <!-- 面包屑 -->
        <BreadCrumb :currentRoute="state.currentRoute"></BreadCrumb>
        <!-- 卡片 -->
        <div class="dialogue-content">
            <!-- 个人信息头像 -->
            <div class="personal">
                <div class="personal-avatar">
                    <el-avatar :size="80"/>
                    <div class="personal-photo"><i class="photo-icon iconfont icon-zhaoxiangji1"></i></div>
                </div>
                
                <div class="personal-name">名字</div>
                <div class="personal-info">
                    <div class="personal-info-item personal-job"><i class="icons iconfont icon-yonghu"></i>前端工程师</div>
                    <div class="personal-info-item"><i class="icons iconfont icon-zhuye"></i>架构-前端</div>
                    <div class="personal-info-item personal-address"><i class="icons iconfont icon-weizhi"></i>北京</div>
                </div>
            </div>
            <!-- 项目和团队 -->
            <div class="person-flex project-team">
                <div class="person-myProject">
                    <div class="person-part-head">
                        <div>我的项目</div>
                        <div class="check-more">查看更多</div>
                    </div>
                    <div class="person-myProject-list">
                        <div class="person-myProject-item">
                            <div class="myProject-item-name">企业级产品涉及系统</div>
                            <div class="color-gray myProject-item-eName">Arco Design System</div>
                            <div class="flex">
                                <div class="flex">
                                    <image class="myProject-item-avatar" src="" />
                                    <image class="myProject-item-avatar avatar-distant" src="" />
                                    <image class="myProject-item-avatar avatar-distant" src="" />
                                    <image class="myProject-item-avatar avatar-distant" src="" />
                                    <!-- <el-avatar :size="50"></el-avatar>
                                    <el-avatar class="myProject-item-avatar" :size="50"></el-avatar>
                                    <el-avatar class="myProject-item-avatar" :size="50"></el-avatar>
                                    <el-avatar class="myProject-item-avatar" :size="50"></el-avatar> -->
                                </div>
                                <div class="color-gray">等35人</div>
                            </div>
                        
                        </div>
                        <div class="person-myProject-item">
                            <div>企业级产品涉及系统</div>
                            <div class="color-gray">Arco Design System</div>
                            <div>
                                <div></div>
                                <div class="color-gray">等35人</div>
                            </div>
                        
                        </div>
                        <div class="person-myProject-item">
                            <div>企业级产品涉及系统</div>
                            <div>Arco Design System</div>
                            <div>
                                <div></div>
                                <div>等35人</div>
                            </div>
                        
                        </div>
                        <div class="person-myProject-item">
                            <div>企业级产品涉及系统</div>
                            <div>Arco Design System</div>
                            <div>
                                <div></div>
                                <div>等35人</div>
                            </div>
                        
                        </div>
                        <div class="person-myProject-item">
                            <div>企业级产品涉及系统</div>
                            <div>Arco Design System</div>
                            <div>
                                <div></div>
                                <div>等35人</div>
                            </div>
                        
                        </div>
                        <div class="person-myProject-item">
                            <div>企业级产品涉及系统</div>
                            <div>Arco Design System</div>
                            <div>
                                <div></div>
                                <div>等35人</div>
                            </div>
                        
                        </div>
                    </div>
                    
                </div>
                <div class="person-myTeam">
                    <div class="person-part-head">我的团队</div>
                    <div>
                        <el-avatar></el-avatar>
                        <div>
                            <div>火灿引擎智能应用团队</div>
                            <div>共20人</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="person-flex">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted,reactive } from 'vue'
import {useRouter} from "vue-router"
import BreadCrumb from './../../../components/BreadCrumb/breadCrumb.vue'

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

// let dialogueType = computed(() => {
//     return state.dialogueQueryType.map(item=>(item.label))
// })

onMounted(()=> {
    state.currentRoute = state.router.currentRoute.matched
    console.log(state.router.currentRoute);
})

// //数量改变
// const handleSizeChange = () => {}

// //改变当前页面
// const handleCurrentChange = () => {}
</script>

<style lang="less" scoped>
.dialogue {
    width: 100%;
    margin-left: 20px;
    font-size: 16px;
    .dialogue-content {
        // width: 100%;
        // display: flex;
        // justify-content: start;
        // flex-wrap: wrap;

        .flex {
            display: flex;
            align-items: center;
        }
        .personal {
            width: 100%;
            height: 200px;
            background-color: #e8f4ff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .personal-avatar{
                position: relative;
                .personal-photo {
                position: absolute;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background-color: #fff;
                bottom: 8px;
                right: -8px;
                display: flex;
                justify-content: center;
                align-items: center;
                .photo-icon {
                    font-size: 16px;
                    font-weight: 600;
                    color: #6898ff;
                }
            }
            }

            .personal-name {
                font-weight: 600;
                line-height: 30px;
            }
            
            .personal-info {
                display: flex;
                font-size: 12px;
                .personal-info-item {
                    margin-left: 20px;
                    display: flex;
                    align-items: baseline;
                    .icons{
                        margin-right: 8px;
                    }
                }
            }
        }
        // 项目-团队
        .project-team{
            height: 360px;
            margin-top: 20px;
        }
        .person-flex {
            display: flex;
            justify-content: space-between;
        }
        .person-myProject {
            padding: 20px;
            background-color: #fff;
            flex: 3;
            .person-myProject-list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                
                .person-myProject-item {
                    margin-top: 20px;
                    width: 30%;
                    padding: 16px;
                    height: 130px;
                    // border: 1px solid #f9f9fa;
                    border: 1px solid #000;
                    .myProject-item-name {
                        font-weight: 600;
                    }
                    .myProject-item-eName{
                        height: 46px;
                    }
                    .myProject-item-avatar {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        
                    }
                    .avatar-distant {
                        margin-left: -10px;
                    }
                }
                .person-myProject-item:hover {
                    border: 1px solid #3493fc;
                }
            }
        }
        .person-myTeam {
            padding: 20px;
            margin-left: 20px;
            flex: 1;
            background-color: #fff;
        }
        .person-part-head {
                display: flex;
                justify-content: space-between;
                color: #000;
                font-size: 16px;
                font-weight: 600;
                .check-more {
                    font-size: 14px;
                    color: #3271ff;
                }
        }

        .color-gray {
            color: #aeb5bd;
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