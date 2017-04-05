<template>
  <div id="app">
  {{msg}}
    <hr/>
  <test0></test0>
  </div>

  </div>

</template>

<script>

import test0 from './components/test0'

export default {

  name: 'app',
  components: {
      test0
  },
  data:function() {
    return { msg:'data message'}
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
