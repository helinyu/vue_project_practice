<template>
  <div id="app">
    <v-header></v-header>
    <div class="clear_category"></div>
    <v-category></v-category>

    <div class="waimai-content">
      内容w
    </div>

    <div class="test_eleme">

    </div>
    <!-- <v-footer class="outside-footer"></v-footer> -->

    <!-- 组件的注册 -->
    <div id="my-component">
      <my-component>jdkhfasjk</my-component>
    </div>
  </div>
</template>

<script>

import header from './components/headers/header';
import category from './components/category/category';
import footer from './components/footer/footer';

export default {
  components: {
    'v-header':header,
    'v-category':category,
    'v-footer':footer
  }
}
</script>

<style>

*{
  margin: 0;
}

html,body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.outside-footer{
  display: block;
  margin-bottom: 0px;
  float: bottom;
}

.waimai-content {
  color: red;
  /* 页面内容撑满100%的屏幕 */
  min-height: 100%;
  /* 负边距大小即为页脚高度 */
  margin-bottom: -60px;
}

.clear_category {
  clear: both;
}

</style>
