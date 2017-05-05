<template>
	<div>
		<div class = "loadmore" v-if = "height">
			<img src="../../static/img/loading1.gif" alt="正在加载..." />
			<p>正在加载...</p>
		</div>
		<div class ="more" v-else :class = "{sho:isSho}"@click ="load()">
			点击加载更多
		</div>
	</div>
	
</template>

<script>
	import api from '../api/resource'
	export default{
		data:function(){
			return {
				
			}
		},
		created:function(){
			
		},
		mounted:function(){
			//this.isShow = false;
			//this.bindscroll();
		},
		
		computed:{
			date() {
			},
			height() {
				return this.$store.state.height;
			},
			isSho:function(){
				return this.$store.state.isShow;
			}
		},
		methods:{
			bindscroll() {
				let that = this;
				window.addEventListener("scroll",function(){
					let scrollh = document.body.scrollTop;//滚动高度
					let bodyh = document.documentElement.clientHeight;//可视区域高度
					let docuh = document.body.scrollHeight;//文档总高度
					let minh = docuh-scrollh-bodyh;
				  if(minh <= 0){
				  	 that.$store.commit("Changeheight",true);
				  	 that.$emit("loadmore");
				  }
				})
			},
			unbindscroll() {
				
			},
			load(){
			     this.$store.commit("Changeheight",true);
			  	 this.$emit("loadmore");
			}
		}
		
		
	}
	
</script>

<style scoped="scoped">
	.loadmore{
		height: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1px;
	}
	.loadmore img{
		width: 0.8rem;
		height: 0.8rem;
		position: absolute;
	}
	.loadmore p{
		position: absolute;
	}
	.more{
		width: 100%;
		height: 1rem;
	    text-align: center;
	    line-height: 1rem;
	    font-size: 14px;
	    color: #007AFF;
	    margin-top: 1px;
	}
	.item + .more{
		
	} 
	.list + .more{
		
	}
	.sho{
		display: none;
	}
	
</style>