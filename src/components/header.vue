<template>
  <header class="header">
    <div class="container">
      <a href=""
         class="logo">
        <img src="">
      </a>
      <nav>
        <ul class="navList">
          <li v-for="nav in navList" @click="navClick(nav.code)">
            <span v-text="nav.text"></span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'bl-header'
  };
</script>

<style lang="scss">
  .header {
    height: 5rem;
    background-color: #fff;
  }
</style>
