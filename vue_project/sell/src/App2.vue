<template>
  <div id="app">

    <mt-tab-container v-model='active'>
    <mt-tab-container-item id="tab-container1">
      <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container2">
      <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container3">
      <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
    </mt-tab-container-item>
    </mt-tab-container>


  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
   return {
    active: 'tab-container1',
    }
  }
}

</script>

<style>

@import "./assets/css/mint-ui@2.2.1.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.whitespace {
  height: 2px;
  background-color: purple;
}

.style-background {
  background-color: yellow;
  color: red;
}
</style>
