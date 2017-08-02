<template>
  <header class="header">
    <div class="container">
      <a href=""
         class="logo">
        <img src="">
      </a>
      <nav class="main-nav">
        {{access}}
        <ul class="navList">
          <li class="navItem" v-for="nav in navList" @click="navClick(nav.href)">
            <span v-text="nav.name"></span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  import NavList from '@json/nav';
  import {mapGetters} from 'Vuex';

  export default {
    name: 'bl-header',
    data() {
      return {
        navList: NavList
      };
    },
    computed: {
      ...mapGetters([
        'getAccess'
      ]),
      access() {
        return this.getAccess;
      }
    },
    methods: {
      navClick(href) {
        this.$router.push(href);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/lib";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: $base-zIndex;
    @include px2rem(height, $base-head-height);
    background-color: #fff;
    .container {
      display: flex;
      align-items: center;
      height: 100%;
    }
    @at-root {
      .logo {
        @include px2rem(width, $base-head-height);
        @include px2rem(margin-left, 10px);
        display: block;
        height: 60%;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
      .main-nav {
        display: flex;
        flex: 1;
        height: 100%;
        justify-content: flex-end;
      }
      .navList {
        display: flex;
        height: 100%;
        cursor: pointer;
      }
      .navItem {
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
