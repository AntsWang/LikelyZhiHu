<template>
	<div>
	   <router-view></router-view>
	   <div class = "footer">
	   	  <router-link to = "/movie/top" tag = "div"><i class="iconfont icon-icon2"></i></router-link>
	   	  <router-link to = "/movie/come" tag = "div"><i class="iconfont icon-jijiangkaishi"></i></router-link>
	   	  <router-link to = "/movie/hot" tag = "div"><i class="iconfont icon-remen"></i></router-link>
	   	  <router-link to = "/movie/search" tag = "div"><i class="iconfont icon-sou"></i></router-link>
	   </div>
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	.footer{
		height: 50px;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #007AFF;
		color: #FFFFFF;
	}
	.footer div{
		flex: 1;
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
	.router-link-active{
		color: red;
	}	
</style>