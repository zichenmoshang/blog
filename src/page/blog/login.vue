<template>
  <div class="login">
    <p class="login-title">登陆</p>
    <z-form :state="state">
      <z-form-item name="userName"
                   label="用户名">
        <input type="text"
               name="userName"
               v-model="form.userName"
               required>
      </z-form-item>
      <z-form-item name="password"
                   label="密码">
        <input type="password"
               name="password"
               v-model="form.password"
               required>
      </z-form-item>
      <z-form-item name="confirmPassword"
                   label="确认密码">
        <input type="password"
               name="confirmPassword"
               v-model="form.confirmPassword"
               :compare="{compareValue: form.password, mode: 'equal'}"
               required>
      </z-form-item>
    </z-form>
    <button class="login-btn"
            @click="submit">登陆
    </button>
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
      submit() {
        this.state._setSubmit();
        if (this.state.$valid) {
          this.login(this.form).then(res => {
            this.$router.push('/blog/home');
          });
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

  .login-btn {
    @include px2rem(width, 150px);
    @include px2rem(line-height, 40px);
    background-color: $color-blue;
    color: #fff;
    font-size: 18px;
    border-radius: 4px;
    &:hover {
      background-color: $color-blue * 0.8;
    }
  }
</style>
