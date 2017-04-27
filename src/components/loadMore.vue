<template>
	<div class = "loadmore" v-if = "height">
		<img src="../../static/img/loading1.gif" alt="正在加载..." />
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				height:false
			}
		},
		mounted:function(){
			this.bindscroll();
		},
		ready:function(){
			console.log(document.body.scrollHeight);
		},
		methods:{
			bindscroll:function(){
				console.log(document.body.scrollHeight);
				window.addEventListener("scroll",function(){
				   
				})
			},
			unbindscroll:function(){}
		}
		
		
	}
	
</script>

<style>
	
</style>