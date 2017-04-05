<template>
  <div class="category">
	  <div class="css-seller childDiv"> 商家 </div>
	  <div class="css-goods childDiv"> 商品 </div>
	  <div class="css-other childDiv"> 其他 </div>
  </div>
</template>

<script type="text/babel" >
  export default {
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.category {
	background-color: yellow;
	display: flex;
}

.childDiv {
	display: inline-block;
	border: 0.1px solid greenyellow;
	flex: 1;
	margin: 0.1rem;
}

/*.css-seller {
	display: inline-block;
}

.css-goods {
	display: inline-block;
}

.css-other {
	display: inline-block;
}*/

</style>