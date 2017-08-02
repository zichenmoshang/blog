<template>
  <div class="login">
    <el-form :model="form" :rules="rules" ref="loginForm" labelWidth="80px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="form.confirmPassword"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="large" class="btn-login" @click="submit('loginForm')">登陆</el-button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'login',
    data() {
      return {
        form: {
          userName: '',
          password: '',
          confirmPassword: ''
        },
        rules: {
          userName: [
            {
              required: true,
              message: '请输入用户名称',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }
          ],
          confirmPassword: [
            {
              required: true,
              message: '请确认密码',
              trigger: 'blur'
            }
          ]
        }
      };
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      submit(formName) {
        this.$refs[formName].validate(valid => {
          valid && this.login(this.form).then(res => {
            this.$router.push('/pre/home');
          });
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/lib";

  .login {
    width: 80%;
    @include px2rem(max-width, 400px);
    @include px2rem(padding-top, 50px);
    margin: 0 auto;
  }
  .btn-login {
    margin-left: 80px;
  }
</style>
