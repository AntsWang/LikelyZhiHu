<template>
	<div>
			<div class = "wraper">
				<div class = "item" v-for = "item in datalist">
				     <div class = "left">
				      <img :src="item.images.small" alt="" />
				     </div>
				     <div class = "right">
				     	<h3>{{item.title}}</h3>
				     	<div class = "pingfen">{{item.rating.average}}分</div>
				     	<div class = "director">导演：{{item.directors[0].name}}</div>
				     	<div class = "casts">主演：<span v-for = "items in item.casts">{{items.name}}</span></div>
				     	<div class = "like">{{item.collect_count}}人想看</div>
				     </div>
				</div>     
			</div>
	   
	</div>
</template>

<script>
	import api from '../api/resource'
	export default{
		data(){
			return {
			     datalist:[]	
			}
		},
		mounted(){
			this.GetData();
		},
		methods:{
			GetData(){
				let that = this;
				api.Getcome().then(function(data){
					console.log(data);
					that.datalist = data.data.subjects;
				}).catch();
			}
		}
		
	}
</script>

<style scoped="scoped">
	.wraper{
		background: #39434f;
		color: #fff;
	}
	.item{
		width: 100%;
		clear: both;
		margin-top: 0.1rem;
		min-height:1.7rem;
	}
	.left{
		float: left;
		padding: 0.1rem;
	}
	.left img{
		width:1rem;
		height: 1.5rem;
	}
	.right{
		width: 2.55rem;
		float:left;
		height: 1.2rem;
	}
	.right h3{
		margin-top: 0.05rem;
		height: 0.3rem;
		line-height:0.3rem;
		font-size: 16px;
	}
	.right .pingfen{
		height: 0.3rem;
		line-height: 0.3rem;
		font-size: 12px;
		color: #42B983;
	}
	.right .director{
		height: 0.3rem;
		line-height: 0.3rem;
	} 
	.right .casts{
		line-height: 0.2rem;
		max-width:2rem ;
	} 
	.right span{
		margin-left:0.05rem ;
	}
	.right .like{
		height: 0.3rem;
		line-height:0.3rem;
		color: #42B983;
	} 
</style>