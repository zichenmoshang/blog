<template>
  <div>
    <pa-form :state="state">
      <input v-model.trim="abc"
             name="id"
             maxlength="11"
             mobile
             :customValidate="custom"
             required/>
      <pa-message name="id">
        <p slot="required">该项是必填选项</p>
        <p slot="maxlength">超过11</p>
        <p slot="mobile">输入正确的手机号码</p>
      </pa-message>
    </pa-form>
    {{state}}
  </div>
</template>

<script>
  import Vue from 'vue';
  import PaVaildtor from '../common/pa-validator';
  Vue.use(PaVaildtor);

  export default {
    name: 'demo',
    data() {
      return {
        abc: '',
        state: {},
        custom: {
          isIdCard: function(value) {
            return value.length > 0;
          }
        }
      };
    },
    created() {
      this.$watch('abc', val => {
        console.log(val);
      }, {
        deep: true,
        immediate: true
      });
      this.$watch('state', val => {
        console.log(val);
      }, {
        deep: true,
        immediate: true
      });
    }
  };
</script>
