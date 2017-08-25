<template>
  <div>
    <span v-for="btn in toolbars">
      <button type="button" v-text="btn.content" @click="setStyle(btn)"></button>
    </span>
  </div>
</template>

<script>
  import Toolbar from '../toolbar';

  export default {
    name: 'z-toolbar',
    data() {
      return {
        toolbars: Toolbar
      };
    },
    methods: {
      setStyle(btn) {
        btn.fn();
      }
    }
  };
</script>

<style lang="scss">

</style>
