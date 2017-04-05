<template>
  <div >
  <h3 v-text="msg"></h3>
  <button v-on:click='changeValue'> {{msg}} </button>
  </div>
</template>

<script>

export default {
  name: 'test0',
  data:function() {
    return { msg:'test method vue'}
  },
  methods: {
  	changeValue() {
  		console.log('clicked');
  		this.msg = "change value by methods"
  	}
  },
  watch: {
  	msg:function(val, oldVal){
  		console.log("val"+val);
  		console.log("oldVal"+ oldVal);
  		console.log('this is : '+ this);
      console.log('vm test: '+ this.vm);
      // console.log('vm: '+ vm);
      console.log('$el' + this.$el)
  	}
  }

}
</script>

<style>

</style>
