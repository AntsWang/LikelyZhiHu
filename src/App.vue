<template>
  <div id="app">
  	<div class = "header">
  		<router-link to = "/home">文章</router-link>
  		<router-link to = "/music">音乐</router-link>
  		<router-link to = "/movie">电影</router-link>
  	</div>
  	<div class = "main">
  		<keep-alive>
  		<router-view></router-view>
  	</keep-alive>
  	</div>
  	
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app .header{
	position: fixed;
	top: 0;
	left: 0;
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom:1px ;
  background: #fff;
  z-index: 3;
  box-shadow: 0px 0px 40px #ffbc00 inset;
}
#app .header a{
	flex: 1;
	text-align: center;
	height: 50px;
	line-height: 50px;
	color: #FFD300;
}
.router-link-active{
	color: blue !important;
}
.main{
	margin-top: 50px;
}
</style>
