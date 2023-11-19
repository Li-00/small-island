<!--
 * @Author: huangxiaomei huangxiaomei@gdgjedu.org
 * @Date: 2023-08-29 09:24:58
 * @LastEditors: huangxiaomei huangxiaomei@gdgjedu.org
 * @LastEditTime: 2023-09-01 17:22:50
 * @Description: 
-->
<template>
    <div class="userSetting-dialogue">
        <!-- 面包屑 -->
        <BreadCrumb :current-route="state.currentRoute"></BreadCrumb>
        <!-- 个人信息 -->
        <div class="person-info">
            <!-- 个人信息头像 -->
            <div class="personal flex-align-center">
                <div class="personal-avatar">
                    <el-avatar :size="66" />
                    <div class="personal-photo flex-center">
                        <i class="f14 iconfont icon-zhaoxiangji1"></i>
                    </div>
                </div>

                <div class="personal-table">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="flex-align-center">
                                <label class="table-label">用户名：</label>
                                <div>dsfuis</div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="flex-align-center">
                                <label class="table-label">实名认证：</label>
                                <div>
                                    <el-tag type="info" size="small">已认证</el-tag>
                                    修改
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="flex-align-center">
                                <label class="table-label">账号ID：</label>
                                <div>2489372598</div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="flex-align-center">
                                <label class="table-label">手机号码：</label>
                                <div>
                                    <el-tag type="info" size="small">2489372598</el-tag>
                                    修改
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="flex-align-center">
                                <label class="table-label">注册时间：</label>
                                <div>2021-06-30</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <!-- 修改信息 -->
        <div class="edit-info">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基础信息" name="baseInfo">
                    <el-form
                        ref="baseInfoFormRef"
                        :model="baseInfoForm"
                        :rules="baseInfoRules"
                        label-width="120px"
                        class="demo-ruleForm"
                        status-icon
                    >
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="baseInfoForm.email" />
                        </el-form-item>
                        <el-form-item label="昵称" prop="nickName">
                            <el-input v-model="baseInfoForm.nickName" />
                        </el-form-item>
                        <el-form-item label="具体地址" prop="address">
                            <el-input v-model="baseInfoForm.address" />
                        </el-form-item>
                        <el-form-item label="个人简介" prop="personalDesc">
                            <el-input v-model="baseInfoForm.personalDesc" type="textarea" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm(baseInfoFormRef)">
                                保存
                            </el-button>
                            <el-button @click="resetForm(baseInfoFormRef)">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="安全设置" name="saveSetting">安全设置</el-tab-pane>
                <el-tab-pane label="实名认证" name="authentication">实名认证</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
// import type { TabsPaneContext, FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import BreadCrumb from './../../../components/BreadCrumb/breadCrumb.vue'

// interface RuleForm {
//     email: string
//     nickName: string
//     address: string
//     personalDesc: string
// }
const activeName = ref('baseInfo')
const baseInfoFormRef = ref()
const baseInfoForm = reactive({
    email: '19800',
    nickName: 'ajsd',
    address: 'sjadhkjsh',
    personalDesc: 'hgjsgdu',
})

const baseInfoRules = reactive({
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    nickName: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
})

const handleClick = (tab, event) => {
    console.log(tab, event)
}

const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!', valid)
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}

const state = reactive({
    router: useRouter(),
    currentRoute: [],
})

// let dialogueType = computed(() => {
//     return state.dialogueQueryType.map(item=>(item.label))
// })

onMounted(() => {
    state.currentRoute = state.router.currentRoute.matched
    console.log(state.router.currentRoute)
})
</script>

<style lang="scss" scoped>
.userSetting-dialogue {
    width: 100%;
    padding-left: 20px;

    .person-info {
        width: 100vw;
        padding: 20px;
        box-sizing: border-box;
        background-color: #fff;

        .personal-avatar {
            position: relative;
            width: 66px;
            height: 66px;
            margin-right: 50px;
            .personal-photo {
                position: absolute;
                width: 20px;
                height: 20px;
                bottom: 2px;
                right: -6px;
                background-color: #e8f4ff;
                border-radius: 50%;
                color: #6898ff;
            }
        }

        .personal-table {
            width: 100%;
            line-height: 30px;
            .table-label {
                min-width: 100px;
                display: flex;
                justify-content: end;
            }
        }
    }

    .edit-info {
        padding: 0 20px;
        background-color: #fff;
        margin-top: 20px;
    }
}
</style>

<style lang="scss">
.el-tabs__nav {
    text-align: center;
}
//去掉初始下划线
.el-tabs__nav-wrap::after {
    display: none;
}

//点击到某一项时的下划线
.el-tabs__active-bar {
    width: 0 !important;
    border-radius: 2px;
    background: #eeeeee;
}

// 点击的某一项时改变字体颜色
.el-tabs__item.is-active {
    background-color: #f2f3f8;
    border-radius: 50px;
    color: #a2affb;
}
</style>
