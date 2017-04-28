<template>
	<div class = "wraper">
		<swipe>
			<div class = "swiper-slide" v-for = "item in toplist">
				<img :src ="item.image" alt="item.title" />
				<p>{{item.title}}</p>
			</div>
		</swipe>
	    <div class = "section">
	    	<div class = "list" v-for = "item in sectionlist">
	    		<p class = "date" v-show = "true">{{Fdate(item.date)}}</p>
	    		<div class = "item" v-for="itemd in item.stories" @click = "Showdetail(itemd.id)">
		    		<img :src="itemd.images[0]" alt="itemd.title" />
		    		<p class = "title">{{itemd.title}}</p>
		    	</div>
	    	</div>
	    	
	    	
	    </div>
	    <isloading></isloading>
	    <loadmore @loadmore = loadmore></loadmore>
	</div>
	
</template>

<script>
	import swiper from '../components/swiper/swiper.vue'
	import isloading from '../components/isLoading'
	import loadmore from '../components/loadMore'
	import api from '../api/resource'
	export default {
		data:function(){
			return {
				toplist:[],
				sectionlist:[],
				date:""
			}
		},
		mounted:function(){
			this.Loademoj(true);
			this.GetData();
		},
		ready:function(){
			this.$nextTick(function(){
               
                var mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay:1000,
                    pagination: '.swiper-pagination'});
})
},
components: {
		swipe: swiper,
		isloading: isloading,
		loadmore:loadmore
	},
	computed: {
	},
	methods: {
		Loademoj(bool) {
			console.log(1111);
		    this.$store.commit('Changeloading', bool);
		},
		GetData(date) {
			let that = this;
			if(!date){
				api.Getnews().then(function(data) {
					that.Loademoj(false);
					that.toplist = data.data.top_stories;
					that.sectionlist.push(data.data);
				}).catch(function(err) {
					console.log(err);
				});
			}else{
				api.Getnewsbydate(date).then(function(data){
					that.$store.commit("Changeheight",false);
					that.sectionlist.push(data.data);
					console.log(data);
				}).catch();
			}
			
		},
		loadmore(date) {
			this.GetData(date);
		},
		Fdate(date) {
			let str = date.substring(0, 4) +"/"+date.substring(4,6)+"/"+date.substring(6);
				return str;
			},
			Showdetail(id) {
				this.$router.push({name:'detail',params:{id:id}});
/*				api.Getnewsbyid(id).then(function(data){
					console.log(data);
				}).catch(function(err){
					console.log(err);
				});*/
			}

		}
		
	}
</script>

<style scoped>
   	.wraper .swiper-slide {
   	position: relative;
   }
   
   .swiper-slide p {
   	width: 70%;
   	position: absolute;
   	top: 70%;
   	left: 30%;
   	color: white;
   	font-size: 16px;
   	line-height: 32px;
   	font-weight: bold;
   }
   
   .swiper-slide img {
   	width: 100%;
   	height: 100%;
   }
   
   .section {
   	padding: 0 0.2rem;
   }
   .section .list{
   	margin-top: 10px;
   }
   
   .section .item {
   	width: 2.95rem;
   	height: 0.8rem;
   	padding: 0.1rem 0.2rem;
   	background: #fff;
   	border-radius: 5px;
   	margin-top: 20px;
   	box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.15);
   	clear: both;
   }
   
   .section img {
   	float: left;
   	width: 0.75rem;
   	height: 0.75rem;
   	margin-right: 0.1rem;
   }
   
   .section p.title {
   	float: left;
   	width: 2rem;
   	font-size: 14px;
   	line-height: 28px;
   	margin-top: 0.1rem;
   	text-align: justify;
   	word-break: break-all;
   	text-overflow: ellipsis;
   	display: -webkit-box;
   	/** 对象作为伸缩盒子模型显示 **/
   	-webkit-box-orient: vertical;
   	/** 设置或检索伸缩盒对象的子元素的排列方式 **/
   	-webkit-line-clamp: 2;
   	/** 显示的行数 **/
   	overflow: hidden;
   	/** 隐藏超出的内容 **/
   }
   
   .section p.date {
   	width: 45%;
   	height: 0.3rem;
   	border-radius: 0.3rem;
   	background: #ffd300;
   	text-align: center;
   	line-height: 0.3rem;
   	color: #fff;
   	font-size: 14px;
   	font-weight: 800;
   }
</style>