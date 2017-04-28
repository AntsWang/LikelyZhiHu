<template>
	<div>电影</div>
</template>

<script>
	import api from '../api/resource'
	export default{
		data(){
			return {
				
			}
		},
		mounted(){
			this.GetData();
		},
		methods:{
			GetData(){
				api.Gethot().then(function(data){
					console.log(data);
				}).catch();
			}
		}
		
	}
</script>

<style>
</style>