<template>
  <div>
    <z-editor></z-editor>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Editor from '../../common/plugins/editor';

  Vue.use(Editor);

  export default {
    name: 'note',
    data() {
      return {

      };
    }
  };
</script>

<style>

</style>
