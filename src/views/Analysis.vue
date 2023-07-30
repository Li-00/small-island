<template>
    <!-- S 分析页 -->
    <div class="analysis-main">
        <!-- 分析页头部 -->
        <div class="analysis-t">
            <!-- 访问总人数 -->
            <div class="visitor-stats">
                <div class="visitor-stats-data">
                    <h3>{{ thousandsSeparator(12256) }}</h3>
                    <div>
                        <span>较昨天 206 </span>
                        <img src="@/assets/img/add@1x.png" />
                    </div>
                </div>
                <div ref="visitorChart" class="visitor-stats-chart"></div>
            </div>
            <!-- 内容发布量 -->
            <div class="content-stats">
                <div class="content-stats-data">
                    <h3>{{ thousandsSeparator(1138) }}</h3>
                    <div>
                        <span>较昨天 405 </span>
                        <img src="@/assets/img/less@1x.png" />
                    </div>
                </div>
                <div ref="contentChart" class="content-stats-chart"></div>
            </div>
            <!-- 评论总量 -->
            <div class="comment-stats">
                <div class="comment-stats-data">
                    <h3>{{ thousandsSeparator(4592) }}</h3>
                    <div>
                        <span>较昨天 112 </span>
                        <img src="@/assets/img/add@1x.png" />
                    </div>
                </div>
                <div ref="commentChart" class="comment-stats-chart"></div>
            </div>
            <!-- 分享总量 -->
            <div class="share-stats">
                <div class="share-stats-data">
                    <h3>{{ thousandsSeparator(3256) }}</h3>
                    <div>
                        <span>较昨天 588 </span>
                        <img src="@/assets/img/add@1x.png" />
                    </div>
                </div>
                <div ref="shareChart" class="share-stats-chart"></div>
            </div>
        </div>
        <!-- 分析页中间 -->
        <div class="analysis-m">
            <!-- 内容发布比例 -->
            <div class="analysis-m-l">
                <div ref="contentRatioChart" class="content-ratio-chart"></div>
                <div class="more">查看更多</div>
            </div>
            <!-- 热门作者榜单 -->
            <div class="analysis-m-r">
                <div class="hot-list-header">
                    <div>排名</div>
                    <div>作者</div>
                    <div>
                        内容量
                        <i class="asc"></i><i class="desc"></i>
                    </div>
                    <div>
                        点击量
                        <i class="asc"></i><i class="desc"></i>
                    </div>
                </div>
                <div
                    class="hot-list-item"
                    v-for="(item, index) in authorInfoList"
                    :key="item.id"
                >
                    <div class="order">{{ index + 1 }}</div>
                    <div class="author">{{ item.authorName }}</div>
                    <div>
                        {{ thousandsSeparator(item.contentQuantity) }}
                    </div>
                    <div>{{ thousandsSeparator(item.clicks) }}</div>
                </div>
                <div class="more">查看更多</div>
            </div>
        </div>
        <!-- 分析页底部 -->
        <div class="analysis-b">
            <div ref="contentTimeChart" class="content-time-chart"></div>
        </div>
    </div>
    <!-- E 分析页 -->
</template>

<script setup>
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import * as echarts from 'echarts'

/* DOM 访问总人数 */
const visitorChart = ref(null)
/* DOM 内容发布量 */
const contentChart = ref(null)
/* DOM 评论总量 */
const commentChart = ref(null)
/* DOM 分享总量 */
const shareChart = ref(null)
/* DOM 内容发布比例 */
const contentRatioChart = ref(null)
/* DOM 内容发布时段 */
const contentTimeChart = ref(null)

/* 作者信息列表 */
const authorInfoList = ref([])

/* computed 千位分隔符 */
const thousandsSeparator = computed(() => {
    return item => {
        return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
})

onBeforeMount(() => {
    // 获取热门作者榜单
    authorInfoList.value = [
        {
            id: 1,
            authorName: '用魔法打败魔法',
            contentQuantity: 1500,
            clicks: 32214,
        },
        {
            id: 2,
            authorName: '王多余',
            contentQuantity: 1500,
            clicks: 32214,
        },
        {
            id: 3,
            authorName: '请叫我小李',
            contentQuantity: 1500,
            clicks: 32214,
        },
        {
            id: 4,
            authorName: 'Christopher',
            contentQuantity: 1500,
            clicks: 32214,
        },
        {
            id: 5,
            authorName: '-朵追逐月亮的向睡了多久啊龙卷风',
            contentQuantity: 1500,
            clicks: 32214,
        },
        {
            id: 6,
            authorName: 'Christopher',
            contentQuantity: 1500,
            clicks: 32214,
        },
        {
            id: 7,
            authorName: '橙皮',
            contentQuantity: 1500,
            clicks: 32214,
        },
    ]
})

onMounted(() => {
    // 访问总人数可视化
    visitor()
    // 内容发布量可视化
    content()
    // 评论总量可视化
    comment()
    // 分享总量可视化
    share()
    // 内容发布比例可视化
    contentRatio()
    // 内容发布时段可视化
    contentTime()
})

/* Chart 访问总人数 */
const visitor = () => {
    let myChart = echarts.init(visitorChart.value)
    const options = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            show: false,
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            show: false,
        },
        series: [
            {
                type: 'line',
                data: [32, 55, 48, 54, 39, 63, 89, 67, 99, 98],
                symbol: 'none',
                smooth: true,
                lineStyle: {
                    color: '#165dff',
                    width: 3,
                },
            },
        ],
    }
    myChart.setOption(options)
}
/* Chart 内容发布量 */
const content = () => {
    let myChart = echarts.init(contentChart.value)
    const options = {
        xAxis: {
            type: 'category',
            data: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
            ],
            show: false,
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 28,
        },
        color: ['#2cab40', '#86df6c'],
        series: [
            {
                type: 'bar',
                data: [10, 20, 18, 23, 22, 30, 22, 18, 26, 28, 14, 20],
                colorBy: 'data',
                itemStyle: {
                    borderRadius: 5,
                },
                barWidth: 7,
            },
        ],
    }
    myChart.setOption(options)
}
/* Chart 评论总量 */
const comment = () => {
    let myChart = echarts.init(commentChart.value)
    const options = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            show: false,
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            show: false,
        },
        series: [
            {
                type: 'line',
                data: [32, 55, 48, 54, 39, 63, 89, 67, 99, 98],
                symbol: 'none',
                smooth: true,
                lineStyle: {
                    color: '#165dff',
                    width: 3,
                },
            },
        ],
    }
    myChart.setOption(options)
}
/* Chart 分享总量 */
const share = () => {
    let myChart = echarts.init(shareChart.value)
    const options = {
        color: ['#8d4eda', '#00b2ff', '#165dff'],
        legend: {
            orient: 'vertical',
            right: 0,
            icon: 'circle',
            itemHeight: 6,
            itemWidth: 15,
            data: [
                { name: '纯文本' },
                {
                    name: '图文类',
                },
                {
                    name: '视频类',
                },
            ],
        },

        series: [
            {
                type: 'pie',
                colorBy: 'data',
                radius: ['60%', '85%'],
                center: ['25%', '50%'],
                data: [
                    {
                        name: '纯文本',
                        value: 8,
                    },
                    {
                        name: '图文类',
                        value: 8,
                    },
                    {
                        name: '视频类',
                        value: 4,
                    },
                ],
                labelLine: {
                    show: false,
                },
                label: {
                    show: false,
                },
            },
        ],
    }
    myChart.setOption(options)
}
/* Chart 内容发布比例 */
const contentRatio = () => {
    let myChart = echarts.init(contentRatioChart.value)
    const options = {
        legend: {
            icon: 'circle',
            itemHeight: 11,
            bottom: 35,
            data: [{ name: '视频类' }, { name: '图文类' }, { name: '纯文本' }],
            itemGap: 25,
        },
        grid: {
            top: 40,
            left: 35,
            right: 50,
            bottom: 110,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none',
            },
            backgroundColor: 'rgba(236, 245, 253, .88)',
            padding: 13,
        },
        xAxis: {
            type: 'category',
            data: [
                '0:00',
                '2:00',
                '4:00',
                '6:00',
                '8:00',
                '10:00',
                '12:00',
                '14:00',
                '16:00',
                '18:00',
                '20:00',
                '22:00',
            ],
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                show: false,
            },
            offset: 10,
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 2.5,
            axisLabel: {
                formatter: val => {
                    if (val == 0) {
                        return val
                    }
                    if (val == 1 || val == 2) {
                        val += '.0'
                    }
                    return `${val}k`
                },
            },
        },
        series: [
            {
                type: 'bar',
                name: '纯文本',
                data: [
                    1.1, 0.7, 0.4, 1, 0.45, 0.6, 0.4, 0.8, 0.35, 0.55, 0.9,
                    0.45,
                ],
                barWidth: 15,
                stack: true,
                itemStyle: {
                    color: '#246eff',
                },
            },
            {
                type: 'bar',
                name: '视频类',
                data: [
                    1.1, 0.7, 0.4, 1, 0.45, 0.6, 0.4, 0.8, 0.35, 0.55, 0.9,
                    0.45,
                ],
                barWidth: 15,
                stack: true,
                itemStyle: {
                    color: '#81e2ff',
                },
            },
            {
                type: 'bar',
                name: '图文类',
                data: [
                    1.1, 0.7, 0.4, 1, 0.45, 0.6, 0.4, 0.8, 0.35, 0.55, 0.9,
                    0.45,
                ],
                barWidth: 15,
                stack: true,
                itemStyle: {
                    color: '#00b2ff',
                },
            },
        ],
    }
    myChart.setOption(options)
}
/* Chart 内容时段分析 */
const contentTime = () => {
    let myChart = echarts.init(contentTimeChart.value)
    const options = {
        legend: {
            icon: 'circle',
            itemHeight: 10,
            bottom: 30,
            data: [{ name: '视频类' }, { name: '图文类' }, { name: '纯文本' }],
        },
        dataZoom: {
            left: 20,
            bottom: 75,
            height: 14,
            start: 16,
            end: 60,
        },
        grid: {
            top: 15,
            left: 40,
            right: 0,
            bottom: 135,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
            },
            backgroundColor: 'rgba(236, 245, 253, .88)',
            padding: 13,
            symbol: '',
        },
        xAxis: {
            type: 'category',
            data: [
                '0:00',
                '1:00',
                '2:00',
                '3:00',
                '4:00',
                '5:00',
                '6:00',
                '7:00',
                '8:00',
                '9:00',
                '10:00',
                '11:00',
                '12:00',
                '13:00',
                '14:00',
                '15:00',
                '16:00',
                '17:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00',
                '23:00',
            ],
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                show: false,
            },
            offset: 10,
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            axisLabel: {
                formatter: val => (val == 0 ? val : `${val}%`),
            },
        },
        series: [
            {
                type: 'line',
                name: '纯文本',
                data: [
                    30, 40, 25, 55, 70, 60, 45, 35, 50, 75, 65, 20, 55, 40, 70,
                    25, 65, 35, 50, 80, 30, 45, 60, 75,
                ],
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    color: '#246eff',
                },
            },
            {
                type: 'line',
                name: '视频类',
                data: [
                    40, 55, 30, 65, 50, 75, 20, 35, 60, 45, 70, 25, 70, 25, 55,
                    40, 65, 35, 50, 80, 30, 45, 60, 75,
                ],
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    color: '#81e2ff',
                },
            },
            {
                type: 'line',
                name: '图文类',
                data: [
                    60, 45, 30, 70, 25, 80, 35, 55, 40, 75, 20, 65, 50, 75, 65,
                    20, 55, 40, 70, 25, 65, 35, 50, 80,
                ],
                smooth: true,
                symbol: 'none',
                itemStyle: {
                    color: '#00b2ff',
                },
            },
        ],
    }
    myChart.setOption(options)
}
</script>

<style lang="scss" scoped>
/* 分析页头部-统计样式 */
@mixin analysis-t-stats-styles {
    display: flex;
    position: relative;
    width: 276px;
    height: 134px;
    border-radius: 5px;
}

/* 分析页-标题样式 */
@mixin analysis-title {
    display: block;
    position: absolute;
    height: 22px;
    color: #101010;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
}

/* 分析页 */
.analysis-main {
    width: 80%;
    min-height: 100vh;
    margin-left: 700px;
    background-color: #f7f8fa;

    /* 分析页头部 */
    .analysis-t {
        display: flex;
        justify-content: space-between;
        position: relative;
        width: 1200px;
        height: 210px;
        margin-bottom: 16px;
        padding: 56px 21px 20px 21px;
        background-color: #fff;
        box-sizing: border-box;

        /* 分析头部标题 */
        &::after {
            @include analysis-title;
            content: '舆情分析';
            top: 20px;
            left: 21px;
        }

        /* 数据 */
        [class$='stats-data'] {
            position: absolute;
            top: 60px;
            left: 20px;

            /* 总计 */
            h3 {
                width: 77px;
                height: 33px;
                line-height: 20px;
                color: rgba(16, 16, 16, 100);
                font-size: 24px;
            }

            /* 比较 */
            div {
                display: flex;
                justify-content: center;
                height: 17px;

                span {
                    margin-right: 5px;
                    color: rgba(78, 89, 105, 100);
                    font-size: 12px;
                }

                img {
                    margin-top: 3px;
                    width: 12px;
                    height: 12px;
                }
            }
        }

        /* 访问总人数 */
        .visitor-stats {
            @include analysis-t-stats-styles;
            background: linear-gradient(
                180deg,
                rgba(242, 249, 254, 1) 0%,
                rgba(230, 244, 254, 1) 99%
            );

            /* 标题 */
            &::after {
                @include analysis-title;
                content: '访问总人数';
                top: 16px;
                left: 20px;
            }

            /* 图表-访问总人数 */
            .visitor-stats-chart {
                position: absolute;
                top: 65px;
                right: 14px;
                bottom: 0;
                left: 144px;
                width: 118px;
                height: 75px;
            }
        }

        /* 内容发布量 */
        .content-stats {
            @include analysis-t-stats-styles;
            background: linear-gradient(
                180deg,
                rgba(245, 254, 242, 1) 0%,
                rgba(230, 254, 238, 1) 99%
            );

            /* 标题 */
            &::after {
                @include analysis-title;
                content: '内容发布量';
                top: 16px;
                left: 20px;
            }

            /* 图表-内容发布量 */
            .content-stats-chart {
                position: absolute;
                top: 68px;
                right: 16px;
                bottom: 20px;
                left: 122px;
                width: 138px;
                height: 70px;
            }
        }

        /* 评论总量 */
        .comment-stats {
            @include analysis-t-stats-styles;
            background: linear-gradient(
                180deg,
                rgba(242, 249, 254, 1) 0%,
                rgba(230, 244, 254, 1) 99%
            );

            /* 标题 */
            &::after {
                @include analysis-title;
                content: '评论总量';
                top: 16px;
                left: 20px;
            }

            /* 图表-评论总量 */
            .comment-stats-chart {
                position: absolute;
                top: 65px;
                right: 14px;
                bottom: 20px;
                left: 144px;
                width: 118px;
                height: 75px;
            }
        }

        /* 分享总量 */
        .share-stats {
            @include analysis-t-stats-styles;
            background: linear-gradient(
                180deg,
                rgba(246, 246, 255, 1) 0%,
                rgba(236, 236, 255, 1) 99%
            );

            /* 标题 */
            &::after {
                @include analysis-title;
                content: '分享总量';
                top: 16px;
                left: 20px;
            }

            /* 图表-分享总量 */
            .share-stats-chart {
                position: absolute;
                top: 50px;
                right: 17px;
                bottom: 20px;
                width: 135px;
                height: 68px;
            }
        }
    }

    /* 分析中间 */
    .analysis-m {
        display: flex;
        justify-content: space-between;
        position: relative;
        width: 1200px;
        height: 440px;
        margin-bottom: 16px;

        /* 查看更多 */
        .more {
            position: absolute;
            top: 23px;
            right: 19px;
            width: 48px;
            height: 17px;
            line-height: 20px;
            color: rgba(22, 93, 255, 100);
        }

        /* 分析页中左 */
        .analysis-m-l {
            position: relative;
            width: 782px;
            height: 440px;
            padding: 56px 21px 20px 21px;
            background-color: #fff;
            box-sizing: border-box;

            /* 分析中左标题 */
            &::after {
                @include analysis-title;
                content: '内容发布比例';
                top: 20px;
                left: 21px;
            }

            /* 图表-内容发布比例 */
            .content-ratio-chart {
                width: 782px;
                height: 398px;
            }
        }

        /* 分析页中右 */
        .analysis-m-r {
            position: relative;
            width: 405px;
            height: 440px;
            padding: 56px 21px 20px 21px;
            background-color: #fff;
            box-sizing: border-box;

            /* 分析中右标题 */
            &::after {
                @include analysis-title;
                content: '热门作者榜单';
                top: 20px;
                left: 21px;
            }

            /* 热榜字段 */
            .hot-list-header {
                display: flex;
                align-items: center;
                width: 349px;
                height: 40px;
                margin-top: 5px;
                padding: 0 10px;
                background-color: #f2f3f8;
                color: rgba(16, 16, 16, 100);
                font-size: 16px;
                font-weight: 600;
                line-height: 20px;
                border-radius: 2px 2px 0px 0px;

                /* 排名 */
                > div:nth-child(1) {
                    width: 40px;
                    height: 20px;
                    padding: 0 10px;
                }

                /* 作者 */
                > div:nth-child(2) {
                    width: 100px;
                    height: 20px;
                    padding: 0 10px;
                }

                /* 内容量 */
                > div:nth-child(3) {
                    position: relative;
                    width: 65px;
                    height: 20px;
                    padding: 0 10px;

                    /* 升序小三角 */
                    .asc {
                        position: absolute;
                        top: -2px;
                        right: 10px;
                        width: 0;
                        height: 0;
                        border: 5px solid transparent;
                        border-bottom-color: #c4c4c4;
                    }

                    /* 降序小三角 */
                    .desc {
                        position: absolute;
                        right: 10px;
                        bottom: -2px;
                        width: 0;
                        height: 0;
                        border: 5px solid transparent;
                        border-top-color: #c4c4c4;
                    }
                }

                /* 点击量 */
                > div:nth-child(4) {
                    position: relative;
                    width: 65px;
                    height: 20px;
                    padding: 0 10px;

                    /* 升序小三角 */
                    .asc {
                        position: absolute;
                        top: -2px;
                        right: 10px;
                        width: 0;
                        height: 0;
                        border: 5px solid transparent;
                        border-bottom-color: #c4c4c4;
                    }

                    /* 降序小三角 */
                    .desc {
                        position: absolute;
                        right: 10px;
                        bottom: -2px;
                        width: 0;
                        height: 0;
                        border: 5px solid transparent;
                        border-top-color: #c4c4c4;
                    }
                }
            }

            /* 热榜列表 */
            .hot-list-item {
                display: flex;
                align-items: center;
                width: 369px;
                height: 40px;
                padding: 0 10px;
                border-bottom: 3px solid #f7f8fa;

                > div:nth-child(1) {
                    width: 40px;
                    height: 20px;
                    padding: 0 10px;
                }
                > div:nth-child(2) {
                    width: 100px;
                    height: 20px;
                    padding: 0 10px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                > div:nth-child(3) {
                    position: relative;
                    width: 65px;
                    height: 20px;
                    padding: 0 10px;
                }
                > div:nth-child(4) {
                    position: relative;
                    width: 65px;
                    height: 20px;
                    padding: 0 10px;
                }
            }
        }
    }

    /* 分析页底部 */
    .analysis-b {
        position: relative;
        width: 1200px;
        height: 430px;
        padding: 56px 21px 20px 21px;
        background-color: #fff;
        box-sizing: border-box;

        /* 分析底部标题 */
        &::after {
            @include analysis-title;
            content: '内容时段分析';
            top: 20px;
            left: 21px;
        }

        /* 图表-发布时段 */
        .content-time-chart {
            width: 1150px;
            height: 388px;
        }
    }
}
</style>
