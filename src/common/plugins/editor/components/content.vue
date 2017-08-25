<template>
  <div>
    <p>ddadadadadaaa</p>
    <div class="content"
         contenteditable="true"
         :onselection="selection"
         ref="content">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content',
    data() {
      return {
        value: ''
      };
    },
    methods: {
      selection() {
        debugger;
      }
    }
  };
</script>

<style lang="scss"
       scoped>
  ::selection {
    background-color: #b3d4fc;
    color: #fff;
    text-shadow: none;
  }
</style>
