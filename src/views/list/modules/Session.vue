<template>
    <!-- S 聊天展示 -->
    <div class="chat">
        <!-- 侧边栏 -->
        <div class="aside">这里是侧边栏</div>
        <!-- 主体内容 -->
        <div class="main-content">
            <!-- 记录展示区域 -->
            <div
                class="chat-item"
                v-for="chat in chatData"
                :key="chat.id"
                :class="{ message: true, 'user-sender': chat.sender === 'You' }"
            >
                <!-- 聊天机器人 -->
                <div v-if="chat.sender !== 'You'" class="avatar-robot">
                    <img :src="chat.imgUrl" alt="机器人头像" />
                    <span>管家</span>
                </div>
                <!-- 消息 -->
                <div
                    class="message-content"
                    :class="
                        chat.sender === 'You' ? 'user-message' : 'robot-message'
                    "
                >
                    {{ chat.message }}
                </div>
                <!-- 用户 -->
                <div v-if="chat.sender === 'You'" class="avatar-user">
                    <img :src="chat.imgUrl" alt="用户头像" />
                    <span>用户1</span>
                </div>
            </div>
            <!-- 输入框 -->
            <textarea
                type="text"
                class="input-wrap"
                placeholder="Send a message"
                ref="textarea"
                v-model.trim="newMessage"
                @input="adjustTextareaHeight"
                @keyup.enter="sendMessage"
            ></textarea>
        </div>
    </div>
    <!-- E 聊天展示 -->
</template>

<script>
import { reactive, toRefs, ref } from 'vue'

export default {
    setup() {
        const data = reactive({
            /* 聊天记录 */
            chatData: [
                {
                    id: 1,
                    sender: 'Robot',
                    message: 'Hello!',
                    imgUrl: 'https://picsum.photos/40/40',
                },
                {
                    id: 2,
                    sender: 'Robot',
                    message: 'Hi Alice!',
                    imgUrl: 'https://picsum.photos/40/40',
                },
                {
                    id: 3,
                    sender: 'Robot',
                    message: 'How are you?',
                    imgUrl: 'https://picsum.photos/40/40',
                },
                {
                    id: 4,
                    sender: 'Robot',
                    message: "I'm doing well, thanks!",
                    imgUrl: 'https://picsum.photos/40/40',
                },
            ],
            /* 聊天输入框中的内容 */
            newMessage: '',
            /* 每行达到的个数 */
            lastInputLength: [],
        })

        /* DOM 聊天输入框 */
        const textarea = ref(null)

        /* click 发送 */
        function sendMessage() {
            // 聊天输入框不为空
            if (data.newMessage.trim() !== '') {
                const newChat = {
                    id: data.chatData.length + 1,
                    sender: 'You',
                    message: data.newMessage,
                    imgUrl: 'https://picsum.photos/40/40',
                }
                data.chatData.push(newChat)
                // 清空输入框
                data.newMessage = ''
                // 重置聊天输入框高度
                textarea.value.style.height = '24px'
            }
        }

        /* input 调整输入框高度(不一定会留着) */
        const adjustTextareaHeight = e => {
            const textarea = e.target
            const { scrollHeight, clientHeight } = textarea
            console.log(
                textarea.value.length,
                data.lastInputLength[data.lastInputLength.length - 1]
            )
            // 判断是否为删除
            if (
                textarea.value.length <
                data.lastInputLength[data.lastInputLength.length - 1]
            ) {
                data.lastInputLength.pop()
                textarea.style.height = scrollHeight - 32 - 24 + 'px'
                console.log(scrollHeight, clientHeight)
                return
            }

            if (scrollHeight > clientHeight) {
                data.lastInputLength.push(textarea.value.length)
                console.log(data.lastInputLength, data.lastInputLength.length)
            }

            textarea.style.height = scrollHeight - 32 + 'px'
        }

        return {
            ...toRefs(data),
            textarea,
            sendMessage,
            adjustTextareaHeight,
        }
    },
}
</script>

<style lang="scss" scoped>
/* 聊天记录页面 
----------------------------------------------------------------*/
.chat {
    display: flex;
    margin: auto;
    background-color: #eee;
    width: 1200px;
    height: 766px;
}

/* 主体内容 
----------------------------------------------------------------*/
.main-content {
    flex: 1;
    padding: 0 100px;

    /* 每条聊天记录 */
    .chat-item {
        display: flex;
        align-items: flex-start;
        min-height: 40px;
        margin-bottom: 10px;
        padding: 8px;
        border-radius: 8px;

        /* 消息内容 */
        .message-content {
            position: relative;
            max-width: 300px;
            min-height: 30px;
            padding: 5px 10px;
            border: 1px solid #ccc;
            font-size: 15px;
            text-align: justify;
            line-height: 30px;
            border-radius: 5px;

            /* 消息内容的三角 */
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 10px;
                border: 10px solid transparent;
            }
        }

        /* 用户消息 */
        .user-message {
            margin-right: 20px;
            background-color: #12b7f5;
            &::after {
                right: -20px;
                border-left-color: #12b7f5;
            }
        }

        /* 管家消息 */
        .robot-message {
            margin-left: 20px;
            background-color: #8dfa69;
            &::after {
                left: -20px;
                border-right-color: #8dfa69;
            }
        }

        /* 用户/管家头像 */
        [class^='avatar'] {
            width: 40px;
            height: 40px;
            background-color: #ccc;
            border-radius: 50%;
        }

        /* 管家头像 */
        .avatar-robot {
            margin-right: 10px;
            text-align: center;
        }

        /* 用户头像 */
        .avatar-user {
            margin-left: 10px;
        }

        /* 用户消息记录 */
        &.user-sender {
            justify-content: flex-end;
        }
    }

    /* 底部输入框 */
    .input-wrap {
        position: fixed;
        left: 50px;
        right: 50px;
        bottom: 50px;
        overflow: hidden;
        width: 702px;
        height: 24px;
        max-height: 192px;
        margin: auto;
        padding: 16px 48px 16px 16px;
        border: 0px;
        background-color: #fff;
        font-size: 18px;
        line-height: 24px;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        outline: none;
        resize: none;
    }
}

/* 侧边栏 
----------------------------------------------------------------*/
.aside {
    width: 300px;
    height: 100vh;
    background-color: skyblue;
    line-height: 100vh;
}
</style>
