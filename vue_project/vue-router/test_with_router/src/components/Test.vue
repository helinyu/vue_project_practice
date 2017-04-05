<template>
	<div>
	<p>{{msg}}</p>
	<h1> WF </h1>
	 <div>
		 <router-link to="/">返回上一页</router-link>
		 <!-- 如何实现返回上一个页面 -->
		 <route-view></route-view>	
	 </div>
	</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'this template for testing '
    }
  }
}
</script>