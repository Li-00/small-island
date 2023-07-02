<template>
    <div class="login-containt">
      <!-- <img class="logo" src="../assets/logo.png" /> -->
      <br />
      <login-by-code v-show="logonType === 'code'" v-model="user.username"  @input="onUsernameChange" />
      <login-by-pwd v-show="logonType === 'pwd'" v-model="user.password"  @input="onPasswordChange" /> 

      <button class="login-button" v-on:click="onSubmit">登录</button>
      <br />
      <div class="login-bottom-containt">
        <button
          class="change-login-type"
          @click="onChangeLoginType"
          v-show="logonType === 'pwd'"
        >
          验证码登录
        </button>
        <button
          class="change-login-type"
          @click="onChangeLoginType"
          v-show="logonType === 'code'"
        >
          密码登录
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import LoginByCode from "../components/LoginByCode.vue";
  import LoginByPwd from "../components/LoginByPwd.vue";
  
  export default {
  components: { LoginByCode, LoginByPwd },
  name: "LoginView",
  data() {
    return {
      logonType: "pwd",
      // 用户
      user: {
      username: "",// 添加用户名变量
      password: "",// 添加密码变量
    },

 
    };
  },
  methods: {
    // 更新用户名和密码
    onUsernameChange(value) {
      // 接收子组件传递的用户名，并更新用户名
      this.user.username = value;
    },
    onPasswordChange(value) {
          // 接收子组件传递的用户名，并更新密码名
          this.user.password = value;
    },
    // 登录按钮点击事件
    onSubmit() {
      console.log(`onSubmit:logonType=${this.logonType}, user=${this.user.username}, ${this.user.password}`);
      this.$nextTick(() => {
      // 在下一个更新周期获取最新的用户名和密码值
      if (this.$data.logonType === "pwd") {

        // 密码登录
        console.log("密码登录");
        // 验证用户名是否为空
        if (this.user.username === "") {
          alert("用户名不能为空");
          return;
        }
        // 验证密码是否为字母加数字组合
        let passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
        if (!passwordReg.test(this.user.password)) {
          alert("密码必须为字母和数字组合");
          return;
        }
        console.log(`Success route homePage:logonType=${this.logonType}, user=${this.user}`);
        // 验证通过后路由跳转
        this.$router.push("/homePage");
      } else {
        // 验证码登录
        console.log("验证码登录");
        /// 验证码逻辑待补充
        // 验证通过后路由跳转
        this.$router.push("/homePage");
      }
    });
    },
    onChangeLoginType() {
      if (this.$data.logonType === "pwd") {
        this.$data.logonType = "code";
      } else {
        this.$data.logonType = "pwd";
      }
      console.log("切换登录方式");
    },
  },
};

  </script>
  
  <style  scoped>
  .login-containt {
    text-align: center;
  }
  
  .logo {
    margin-top: 40%;
    width: 100px;
    height: 100px;
  }
  .login-bottom-containt {
    text-align: center;
  }
  .login-button {
    margin-top: 20px;
  }
  .change-login-type {
    text-align: right;
    margin-top: 20px;
  }
  </style>
  