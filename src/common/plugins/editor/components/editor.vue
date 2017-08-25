<template>
  <div>
    <z-toolbar></z-toolbar>
    <z-content></z-content>
  </div>
</template>

<script>
  import Toolbar from './toolbar';
  import Content from './content';

  export default {
    name: 'z-editor',
    components: {
      'z-toolbar': Toolbar,
      'z-content': Content
    }
  };
</script>

<style lang="scss">

</style>

