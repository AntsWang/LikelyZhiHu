<template>
	<div class = "loading" v-if = "loading">
	  <img src="../../static/img/loading1.gif" alt="正在加载..." />
	  <p>{{loadingText}}</p>
	</div>
</div>
</template>

<script>
	export default{
		data:function(){
			return {
				
			}
		},
		mounted:function(){
			
		},
		computed:{
			loadingText:function(){
				return this.$store.state.loadingText;
			},
			loading:function(){
				return this.$store.state.isloading;
			}
		}
		
	}
</script>

<style scoped="scoped" lang="less">
	div.loading{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}
	.loading img{
		width: 1rem;
		height: 1rem;
		position: absolute;
	}
	.loading p{
		position: absolute;

	}
</style>