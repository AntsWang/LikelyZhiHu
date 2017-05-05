<template>
	<div>
		<div class = "search1">
			<input class = "search2" name = "movie" type="text" placeholder="电影搜索" v-model = "params" required="required"/>
			<input class = "search3" name = "btn" type="button" value="搜索" @click = "search()" />
		</div>
		<div class = "wraper">
				<div class = "item" v-for = "item in datalist">
				     <div class = "left">
				      <img :src="item.images.small" alt="" />
				     </div>
				     <div class = "right">
				     	<h3>{{item.title}}</h3>
				     	<div class = "pingfen">{{item.rating.average}}分</div>
				     	<div class = "director">导演：<span v-for = "itemd in item.directors">{{itemd.name}}</span></div>
				     	<div class = "casts" >主演：<span v-for = "items in item.casts">{{items.name}}</span></div>
				     	<div class = "like">{{item.collect_count}}人想看(看过)</div>
				     </div>
				</div>     
			</div>
			<isloading></isloading>
	</div>
</template>

<script>
	import api from '../api/resource'
	import isloading from '../components/isLoading'
	export default{
		components:{
			isloading:isloading
		},
		data(){
			return {
				params:"",
				datalist:[]
			}
		},
		mounted(){
			this.Loademoj(false);
		},
		methods:{
			Loademoj(bool) {
		         this.$store.commit('Changeloading', bool);
		    },
			GetData(param){
				let that = this;
				api.Getsearch(param).then(function(data){
					that.Loademoj(false);
					console.log(data);
					that.datalist = data.data.subjects;
				}).catch(function(err){
					
				});
			},
			search(){
				this.Loademoj(true);
				this.GetData(this.params);
			}
		}
	}
	
</script>

<style scoped="scoped">
	.search1{
		width: 100%;
		height: 50px;
		position: fixed;
		top: 50px;
		left: 0;
		background: #42B983;
	}
	.search2{
		height: 20px;
		width: 1.5rem;
		margin-top: 15px;
		margin-left: 0.5rem;
		border: 1px;
		border-radius: 0.1rem;
		padding-left:0.1rem ;
		outline: none;
	}
	.search3{
		    width: 1rem;
		    background: #ffbc00;
		    border: 1px;
		    border-radius: 0.1rem;
		    height: 24px;
		    outline: none;
	}
	.wraper{
		background: #39434f;
		color: #fff;
		margin-bottom:50px ;
		margin-top: 100px;
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