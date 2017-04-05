<template>
  <div class="TestCompute">
    <h2> test element</h2>
    <label>{{this.message}}</label>

    {{computedString}}
    {{reversedMessage}}
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'TestCompute',
    data() {
      return {
        message:"heello"
      }
    },
    computed: {
      computedString: function() {
        return "haha"
      },
     reversedMessage: function () {
        // `this` points to the vm instance
        return this.message + 'asjdf'
      }
    },
    // computed: {
    // // a computed getter

    // },
    methods: {
    }

}
</script>

<style type="text/css" media="screen">

</style>


