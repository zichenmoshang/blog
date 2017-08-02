<template>
  <div>
    <bl-header></bl-header>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Header} from '@/components';

  Vue.component(Header.name, Header);
</script>

<style lang="scss">
  @import "../../assets/scss/lib";
  .wrapper {
    @include px2rem(padding-top, $base-head-height + 10px);
  }
</style>
