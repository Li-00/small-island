<template>
    <div class="login-containt">
      <!-- <img class="logo" src="../assets/logo.png" /> -->
      <br />
      <login-by-code v-show="logonType === 'code'"></login-by-code>
      <login-by-pwd v-show="logonType === 'pwd'">></login-by-pwd>
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
      };
    },
    methods: {
      onSubmit() {
        this.$router.push('/homePage');
        if (this.$data.logonType === "pwd") {
          // 密码登录
          console.log("密码登录");
        } else {
          // 验证码登录
          console.log("验证码登录");
        }
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
  