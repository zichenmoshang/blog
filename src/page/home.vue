<template>
  <div>

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
