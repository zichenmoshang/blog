<template>
  <div id="app">
    <bl-header></bl-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Header} from '@/components';

  Vue.component(Header.name, Header);

  export default {
    name: 'app'
  };
</script>

<style>
  @import "assets/scss/common";

</style>
