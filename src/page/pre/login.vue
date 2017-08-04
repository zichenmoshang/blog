<template>
  <div class="login">
    <p class="login-title">登陆</p>
    <z-form :state="state"
            ref="loginForm">
      <z-form-item name="userName" label="用户名">
        <input type="text"
               name="userName"
               v-model="form.userName"
               required>
      </z-form-item>
      <z-form-item name="password">

      </z-form-item>
      <z-form-item name="confirmPassword">

      </z-form-item>
      <div class="login-item">
        <label>用户名</label>
        <input type="text"
               name="userName"
               v-model="form.userName"
               required>
        <z-message name="userName">
          <p slot="required">请输入用户名</p>
        </z-message>
      </div>
      <div class="login-item">
        <label>密码</label>
        <input type="text"
               name="password"
               v-model="form.password"
               required>
        <z-message name="password">
          <p slot="required">请输入密码</p>
        </z-message>
      </div>
      <div class="login-item">
        <label>确认密码</label>
        <input type="text"
               name="confirmPassword"
               v-model="form.confirmPassword"
               required>
        <z-message name="confirmPassword">
          <p slot="required">请确认密码</p>
        </z-message>
      </div>
    </z-form>
    <button @click="submit('loginForm')">登陆</button>
    {{state}}
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'login',
    data() {
      return {
        state: {},
        form: {
          userName: '',
          password: '',
          confirmPassword: ''
        }
      };
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      submit(formName) {
        this.$refs[formName].submit();
        if (this.state.$valid) {
          this.$router.push('/pre/home');
        }
      }
    }
  };
</script>

<style lang="scss">
  @import "../../assets/scss/lib";

  .login {
    width: 80%;
    @include px2rem(max-width, 400px);
    margin: 0 auto;

  }

  .login-title {
    @include px2rem(line-height, 80px);
    font-size: 22px;
    font-weight: 400;
    color: #5f6a73;
  }

  .login-item {
    @include px2rem(line-height, 40px);
    input {
      @include px2rem(height, 30px);
    }
  }

  .btn-login {
    @include px2rem(width, 150px);
  }
</style>
