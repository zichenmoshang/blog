<template>
  <div class="aside">
    <ul>
      <li v-for="aside in asideList" v-text="aside.name"></li>
    </ul>
  </div>
</template>

<script>
  import AsideList from '@json/aside';
  export default {
    name: 'z-aside',
    data() {
      return {
        asideList: AsideList
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/lib";

  .aside{
    position: fixed;
    @include px2rem(top, $base-head-height);
    bottom: 0;
    @include px2rem(width, $base-aside-width);
    box-shadow: 0 0 1px 1px $color-gray;
    background-color: $color-white;
  }
</style>
