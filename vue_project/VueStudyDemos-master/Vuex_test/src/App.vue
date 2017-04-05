<template>
  <div id="app">
    <!-- <hello></hello> -->
    <StoreA></StoreA>
    <StoreA></StoreA>
  </div>
</template>

<script>
import Hello from './components/Hello'
import StoreA from './components/StoreA'
import StoreB from './components/StoreB'

export default {
  name: 'app',
  components: {
    Hello,
    StoreA,
    StoreB
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
