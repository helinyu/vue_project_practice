<template>
  <div>
    <router-link to='/'>01</router-link>
    <br/>

     <router-link to="/02/123">02</router-link>
     <router-link to='/01/123'>/01/:userid</router-link>
     <!-- 路由嵌套,id是由route里面进行定义的-->
    <!-- <router-link :to="{ path: '/03/333', query: { name: 'hello nihao' } }">03</router-link> -->
    <!-- <router-link :to="{ path: '/03/333',params: { sex: 'hello'}, query: { name: 'hello nihao', age: 18 },wenti: { height:19 } }">03</router-link> 这个例子看出不可以随便定义guan'jian-->
    <!-- <router-link :to="{ path: '/03/333', params: { sex: 'hello'}, query: { name: 'hello nihao' } }">03</router-link>path 中的sex可以删略掉；因为333 会传递给route中的sex，所以起到冲突的 -->
      <!-- 多个属性, 这里的params和query应该都是关键字，不可以用其他字符串替代 -->
       <router-link :to="{ path: '/03/333',params: { sex: 'hello'}, query: { height:19, name: 'hello nihao', age: 18 } }">03</router-link>
       <!-- 从这里可以看出： params、query是关键字，parmas是 对应着/** 下面的参数，就是嵌套的参数，而query是对应的kv的查询参数
http://localhost:8889/#/03/333?height=19&name=hello%20nihao&age=18
        -->
     <br/>

     <!-- 嵌套 要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置：
-->
    <router-link to="/04">04</router-link>
    <!-- 子嵌套 -->
    
    <br/>
    <router-link to="/05" replace>05</router-link>
    <router-link :to="{ path: '/05', query: { name: 'query', type: 'object' }}" replace>05</router-link>
     <router-link to="/05">
          <button>to05</button>
    </router-link>
    <router-link :to="{ path: '/04', query: { plan: 'private' }}">query04</router-link>

    <br/>
    <hr/>
     <router-view></router-view> 
      <!-- 默认是default 一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置（带上 s）：-->
     <router-view class="view one"></router-view>
     <router-view class="view two" name="a"></router-view>
     <router-view class="view three" name="b"></router-view>
    <hr/>
    <br/> 

    下面是有关method和watch与router之间的作用<br/>
   <button v-on:click="go01">01</button>
    <button v-on:click="go02">02</button>
    <button v-on:click="go03">03</button>
    <button v-on:click="go04">04</button>
    <button v-on:click="go05">05</button>
    <button v-on:click="back">back</button>    

  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    watch:{
      '$route' (to,from) {
          console.log(to);
          console.log(from);
        },
    },
    methods:{
      go01: function () {
        this.$router.push({path:'/'});
      },
      go02: function () {
        this.$router.push({path:'/02'});
      },
      //如何在goto函数在传参数？
      go03: function() {
        // this.$router.push({path:'/03/123',params: {userid:123} });
        this.$router.push({ path: '/03/441', query: { name: 'jack', age: 15, sex: 'male' }})
      },
      go04(){
        this.$router.push({path:'/04'});
      },
      go05(){
        this.$router.push({path:'/05'});
      },
      back(){
        this.$router.go(-1)
      }      

      // go01: function () {
      //   this.$router.push({ path: '/' })
      // },
      // go02: function () {
      //   this.$router.push({ path: '/02' })
      // },
      // go03: function () {
        //this.$router.push({ path: '/03/441', params: { sex: '123' }, query: { name: 'jack', age: 15, sex: 'male' }})
      //   this.$router.push({ path: '/03/441'})
      // },
      // go04: function () {
      //   this.$router.push({ path: '/04' })
      // },
      // go05: function () {
      //   this.$router.replace({ path: '/05', query: { name: 'query', type: 'object' }})
      // },
      // back: function (){
      //   //返回上个页面
      //   this.$router.go(-1)
      // }
    },

  }

</script>
