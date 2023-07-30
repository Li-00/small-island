<template>
    <!-- S 多维数据分析页 -->
    <div class="multiAnalysis-main">
        <!-- 多维数据分析头部 -->
        <div class="multiAnalysis-t">
            <!-- 数据总览 -->
            <div class="multiAnalysis-t-l"></div>
            <!-- 多维数据分析上右 -->
            <div class="multiAnalysis-t-r">
                <!-- 转评赞统计 -->
                <div class="statistics"></div>
                <!-- 内容题材分布 -->
                <div class="distribution"></div>
            </div>
        </div>
        <!-- 多维数据分析中间 -->
        <div class="multiAnalysis-m">
            <!-- 用户留存趋势 -->
            <div class="user-retention-trend"></div>
            <!-- 用户留存量 -->
            <div class="user-retention-volume"></div>
            <!-- 内容消费趋势 -->
            <div class="content-consumption-trend"></div>
            <!-- 内容消费量 -->
            <div class="content-consumption-volume"></div>
        </div>
        <!-- 多维数据分析底部 -->
        <div class="multiAnalysis-b"></div>
    </div>
    <!-- E 多维数据分析页 -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
/* 多维数据分析页-标题样式 */
@mixin multiAnalysis-title {
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    height: 22px;
    color: #101010;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
}

/* 多维数据分析页 */
.multiAnalysis-main {
    width: 80%;
    min-height: 100vh;
    margin-left: 700px;
    background-color: #f7f8fa;

    /* 多维数据分析头部 */
    .multiAnalysis-t {
        display: flex;
        justify-content: space-between;
        width: 1200px;
        height: 500px;
        margin-bottom: 16px;

        /* 多维数据分析上左 */
        .multiAnalysis-t-l {
            position: relative;
            width: 764px;
            height: 500px;
            background-color: #fff;

            /* 标题 */
            &::after {
                @include multiAnalysis-title;
                content: '数据总览';
            }
        }

        /* 多维数据分析上右 */
        .multiAnalysis-t-r {
            width: 420px;
            height: 500px;

            /* 转评赞统计 */
            .statistics {
                position: relative;
                width: 420px;
                height: 200px;
                margin-bottom: 16px;
                background-color: #fff;

                /* 标题 */
                &::after {
                    @include multiAnalysis-title;
                    content: '今日转评赞统计';
                }
            }

            /* 内容题材分布 */
            .distribution {
                position: relative;
                width: 420px;
                height: 285px;
                background-color: #fff;

                /* 标题 */
                &::after {
                    @include multiAnalysis-title;
                    content: '内容题材分布';
                }
            }
        }
    }

    /* 多维数据分析中间 */
    .multiAnalysis-m {
        display: flex;
        justify-content: space-between;
        width: 1200px;
        height: 200px;
        margin-bottom: 16px;

        /* 用户留存趋势 */
        .user-retention-trend {
            position: relative;
            width: 283px;
            height: 200px;
            background-color: #fff;

            /* 标题 */
            &::after {
                @include multiAnalysis-title;
                content: '用户留存趋势';
            }
        }

        /* 用户留存量 */
        .user-retention-volume {
            position: relative;
            width: 283px;
            height: 200px;
            background-color: #fff;

            /* 标题 */
            &::after {
                @include multiAnalysis-title;
                content: '用户存留量';
            }
        }

        /* 内容消费趋势 */
        .content-consumption-trend {
            position: relative;
            width: 283px;
            height: 200px;
            background-color: #fff;

            /* 标题 */
            &::after {
                @include multiAnalysis-title;
                content: '内容消费趋势';
            }
        }

        /* 内容消费量 */
        .content-consumption-volume {
            position: relative;
            width: 283px;
            height: 200px;
            background-color: #fff;

            /* 标题 */
            &::after {
                @include multiAnalysis-title;
                content: '内容消费量';
            }
        }
    }

    /* 多维数据分析底部 */
    .multiAnalysis-b {
        position: relative;
        width: 1200px;
        height: 256px;
        background-color: #fff;

        /* 标题 */
        &::after {
            @include multiAnalysis-title;
            content: '内容时段分析';
        }
    }
}
</style>
