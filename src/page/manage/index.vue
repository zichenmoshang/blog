<template>
  <div class="manage-app">
    <z-header></z-header>
    <z-aside></z-aside>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../../components/header';
  import Aside from '@/components/aside';

  Vue.component(Header.name, Header);
  Vue.component(Aside.name, Aside);
</script>

<style lang="scss">
  @import "../../assets/scss/lib";

  .manage-app {
    .container {
      width: 100%;
      max-width: 100%;
    }
  }
  .wrapper {
    @include px2rem(padding-top, $base-head-height + 10px);
  }
</style>
