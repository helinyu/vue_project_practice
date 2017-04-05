<template>
  <div class="header">
    <div class="avatar">
        <img  width="64" height="64" src="img" alt="头像">
    </div>
    <div class="css-header-text">
      <div class="title">
        {{title}}
      </div>
<!--       <div class="title_description_space">
 -->          
      <!-- </div> -->
      <div class="clear_text"></div>
      <div class="description">
      {{description}}
      </div>
    </div>
  </div>
</template>

<script type="text/babel" >
  export default {
    name:'header',
    data () {
        return {
          title:"标题",
          description:"描述"
        }
      },
      metodh:{

      },
      watch:{

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

.header {
  float: left;
  text-align: left;
  height: 64;
  background-color: gray;
  margin-left: 0
}

.avatar {
  float: left;
  margin-left: 1rem;
  width: 64;
}

.title {
  background-color: red;
}

.description {
  background-color: green;
  vertical-align: middle;
  padding-bottom: 5px;
}

.css-header-text {
  display: inline-block;
  margin-left: 20;
}

.title_description_space {
  height: 20px;
  background-color: clear;
}

.clear_text {
  clear: both;
}

</style>
