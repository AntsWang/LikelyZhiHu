<template>
	<div class = "loadmore" v-if = "height">
		<img src="../../static/img/loading1.gif" alt="正在加载..." />
		<p>正在加载...</p>
	</div>
</template>

<script>
	import api from '../api/resource'
	export default{
		data:function(){
			return {
				count:1
			}
		},
		mounted:function(){
			this.bindscroll();
		},
		computed:{
			date:function(){
				return new Date();
			},
			height:function(){
				return this.$store.state.height;
			}
		},
		methods:{
			bindscroll() {
				let that = this;
				window.addEventListener("scroll",function(){
					let scrollh = document.body.scrollTop;
					let bodyh = document.documentElement.clientHeight;
					let docuh = document.body.scrollHeight;
					let minh = docuh-scrollh-bodyh;
				  if(minh <=0){
				  	 that.$store.commit("Changeheight",true);
				  	 //that.GetDate(that.count);
				  	 that.$emit("loadmore",that.GetDate(that.count++));
				  	 console.log(that.date);
				  }
				})
			},
			unbindscroll() {
				
			},
			GetDate(count) {
				let time = new Date().getTime() - count * 24 * 60 * 60 * 1000;
				let goaldate = new Date(time);
				let year = goaldate.getFullYear();
				let month = goaldate.getMonth()+1;
				month = month > 9?month:"0"+month;
				let day = goaldate.getDate();
				return year+""+month+""+day;
				
			}
		}
		
		
	}
	
</script>

<style>
	.loadmore{
		height: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.loadmore img{
		width: 0.8rem;
		height: 0.8rem;
		position: absolute;
	}
	.loadmore p{
		position: absolute;
	}
</style>