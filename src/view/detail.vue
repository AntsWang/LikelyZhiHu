<template>
	<div class = con>
		<div v-if="data.image" class="con-img">
		<img :src="data.image" />
		<div class="con-img-mask"></div>
		<h2>{{data.title}}</h2>
	</div>
	<div class="con-answer"  v-html="data.body"></div>
	</div>
	
</template>

<script>
	import api from '../api/resource'
	export default {
		data:function(){
			return {
			bod:"",
			data:""
			}
		},
		mounted:function(){
			this.Getdata(this.$route.params.id);
		},
		created:function(){
			
		},
		methods:{
			Getdata(id) {
				let that = this;
				api.Getnewsbyid(id).then(function(data){		
					that.bod = data.data.body;
					that.data = data.data;
					console.log(data);
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>

<style lang="less" scoped="scoped">

</style>