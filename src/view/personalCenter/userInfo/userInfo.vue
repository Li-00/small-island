<template>
	<div class="dialogue">
		<!-- 面包屑 -->
		<BreadCrumb :current-route="state.currentRoute"></BreadCrumb>
		<!-- 卡片 -->
		<div class="dialogue-content">
			<!-- 个人信息头像 -->
			<div class="personal">
				<div class="personal-avatar">
					<el-avatar :size="80" />
					<div class="personal-photo">
						<i class="photo-icon iconfont icon-zhaoxiangji1"></i>
					</div>
				</div>

				<div class="personal-name">名字</div>
				<div class="personal-info">
					<div class="personal-info-item personal-job">
						<i class="icons iconfont icon-yonghu"></i>
						前端工程师
					</div>
					<div class="personal-info-item">
						<i class="icons iconfont icon-zhuye"></i>
						架构-前端
					</div>
					<div class="personal-info-item personal-address">
						<i class="icons iconfont icon-weizhi"></i>
						北京
					</div>
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
						<div
							v-for="projectItem in state.projectList"
							:key="projectItem.id"
							class="person-myProject-item"
						>
							<div class="myProject-item-name">{{ projectItem.projectName }}</div>
							<div class="color-gray myProject-item-eName">
								{{ projectItem.projectETitle }}
							</div>
							<div class="flex">
								<div class="flex">
									<img
										v-for="(imgItem, index) in projectItem.projectImg"
										:key="index"
										:style="`z-index:${projectItem.projectImg.length - index};`"
										class="myProject-item-avatar"
										src="../../../assets/logo.png"
									/>
								</div>
								<div class="color-gray myProject-item-num">
									等{{ projectItem.peopleTotalNum }}人
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="person-myTeam">
					<div class="person-part-head">我的团队</div>
					<el-scrollbar height="100%">
						<div
							v-for="teamItem in state.teamList"
							:key="teamItem.id"
							class="myTeam-item"
						>
							<img class="item-avatar" src="../../../assets/logo.png" />
							<div>
								<div class="f14">{{ teamItem.name }}</div>
								<div class="color-gray f12 team-num">
									共{{ teamItem.tatalNum }}人
								</div>
							</div>
						</div>
					</el-scrollbar>
				</div>
			</div>

			<!-- 最新动态-站内通知 -->
			<div class="flex-justify-between news">
				<div class="news-update">
					<div class="person-part-head">
						<div>最新动态</div>
						<div class="check-more">查看更多</div>
					</div>
					<div
						v-for="newsItem in state.newsList"
						:key="newsItem.id"
						class="news-update-item"
					>
						<div class="flex-center">
							<img class="item-avatar" src="../../../assets/logo.png" />
							<div class="news-contant">
								<div class="f14">{{ newsItem.title }}</div>
								<div class="color-gray f12">
									{{ newsItem.contant }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- <el-scrollbar height="360px"> -->
				<div class="person-myTeam">
					<div class="person-part-head">站内通知</div>
					<el-scrollbar height="100%">
						<div
							v-for="teamItem in state.teamList"
							:key="teamItem.id"
							class="myTeam-item"
						>
							<img class="item-avatar" src="../../../assets/logo.png" />
							<div>
								<div class="f14">{{ teamItem.name }}</div>
								<div class="color-gray f12 team-num">
									共{{ teamItem.tatalNum }}人
								</div>
							</div>
						</div>
					</el-scrollbar>
				</div>
				<!-- </el-scrollbar>s -->
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import { useRouter } from "vue-router"
import BreadCrumb from "./../../../components/BreadCrumb/breadCrumb.vue"

const state = reactive({
	router: useRouter(),
	currentRoute: [],
	projectList: [
		{
			id: 1,
			projectName: "企业级产品涉及系统",
			projectETitle: "Arco Design System",
			projectImg: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				},
				{
					id: 5
				}
			],
			peopleTotalNum: 35
		},
		{
			id: 2,
			projectName: "企业级产品涉及系统",
			projectETitle: "Arco Design System",
			projectImg: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				},
				{
					id: 5
				}
			],
			peopleTotalNum: 35
		},
		{
			id: 3,
			projectName: "企业级产品涉及系统",
			projectETitle: "Arco Design System",
			projectImg: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				},
				{
					id: 5
				}
			],
			peopleTotalNum: 35
		},
		{
			id: 4,
			projectName: "企业级产品涉及系统",
			projectETitle: "Arco Design System",
			projectImg: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				},
				{
					id: 5
				}
			],
			peopleTotalNum: 35
		},
		{
			id: 5,
			projectName: "企业级产品涉及系统",
			projectETitle: "Arco Design System",
			projectImg: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				},
				{
					id: 5
				}
			],
			peopleTotalNum: 35
		},
		{
			id: 6,
			projectName: "企业级产品涉及系统",
			projectETitle: "Arco Design System",
			projectImg: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				},
				{
					id: 4
				},
				{
					id: 5
				}
			],
			peopleTotalNum: 35
		}
	],
	teamList: [
		{
			id: 1,
			name: "火灿引擎智能应用团队",
			totalNum: 20
		},
		{
			id: 2,
			name: "火灿引擎智能应用团队",
			totalNum: 20
		},
		{
			id: 3,
			name: "火灿引擎智能应用团队",
			totalNum: 20
		},
		{
			id: 4,
			name: "火灿引擎智能应用团队",
			totalNum: 20
		},
		{
			id: 5,
			name: "火灿引擎智能应用团队",
			totalNum: 20
		},
		{
			id: 6,
			name: "火灿引擎智能应用团队",
			totalNum: 20
		},
		{
			id: 7,
			name: "火灿引擎智能应用团队",
			totalNum: 20
		}
	],
	newsList: [
		{
			id: 1,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		},
		{
			id: 2,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		},
		{
			id: 3,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		},
		{
			id: 4,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		},
		{
			id: 5,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		},
		{
			id: 6,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		},
		{
			id: 7,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		},
		{
			id: 8,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		},
		{
			id: 9,
			title: "王多鱼审核了图文内容：2021年，你过得怎么样？",
			contant:
				"新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！"
		}
	],
	dialogueQuery: {
		code: "",
		name: "",
		type: 0,
		createTime: []
	},
	dialogueQueryType: [
		{ value: 0, label: "全部" },
		{ value: 1, label: "啥" }
	],
	tableData: [
		{
			id: 0,
			code: "223",
			name: "测试1111",
			type: 1,
			messageNum: "10",
			createTime: "2021-02-18 18:30"
		}
	],
	pageParams: {
		pageNum: 1,
		pageSize: 10,
		total: 1
	}
})

// let dialogueType = computed(() => {
//     return state.dialogueQueryType.map(item=>(item.label))
// })

onMounted(() => {
	state.currentRoute = state.router.currentRoute.matched
	console.log(state.router.currentRoute)
})

// //数量改变
// const handleSizeChange = () => {}

// //改变当前页面
// const handleCurrentChange = () => {}
</script>

<style lang="scss" scoped>
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
			width: 1800px;
			height: 200px;
			background-color: #e8f4ff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.personal-avatar {
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
					.icons {
						margin-right: 8px;
					}
				}
			}
		}
		// 项目-团队
		.project-team {
			height: 360px;
			margin-top: 20px;
		}
		.person-flex {
			display: flex;
			justify-content: space-between;
		}
		.news {
			margin-top: 20px;
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
					.myProject-item-eName {
						height: 46px;
					}
					.myProject-item-avatar {
						width: 30px;
						height: 30px;
						border-radius: 50%;
					}
					.myProject-item-avatar:not(:first-child) {
						margin-left: -14px;
					}

					.myProject-item-num {
						font-size: 14px;
					}
					// .avatar-distant {

					// }
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
			height: 360px;
			background-color: #fff;
			.myTeam-item {
				display: flex;
				padding: 12px 0;
				border-bottom: 1px solid #dcdcdc;

				.team-num {
					line-height: 26px;
				}
			}
		}
		//头像样式
		.item-avatar {
			width: 46px;
			height: 46px;
			border-radius: 50%;
			margin-right: 16px;
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

		//最新动态-站内通知
		.news-update {
			background-color: #fff;
			padding: 20px;
			flex: 3;
		}

		.news-update-item {
			padding-top: 20px;
			.news-contant {
				padding-bottom: 20px;
				border-bottom: 1px solid #c5c9cf;
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

		.dialogue-content-table {
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
