<template>
  <div class="aside">

  </div>
</template>

<script>
  export default {
    name: 'z-aside'
  };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/lib";

  .aside{
    position: fixed;
    @include px2rem(top, $base-head-height);
    bottom: 0;
    @include px2rem(width, $base-aside-width);
    border: 1px solid $color-gray;
    background-color: $color-white;
  }
</style>
