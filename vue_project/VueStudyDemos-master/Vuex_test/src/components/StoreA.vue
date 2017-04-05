<template>
  <div class="StoreA">
    <h1>{{ this.$store.state.count }}</h1>
    <button @click="increment"> <strong>+1</strong></button>
  </div>
</template>

<script>
export default {
  name: 'StoreA',
  data () {
    return {
      count:0
    }
  },
  methods: {
    increment: function () {
      // this.count++
      this.$store.commit('increment');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
