<template>
	<div class = "wraper">
		<swipe>
			<div class = "swiper-slide" v-for = "item in toplist">
				<img :src ="item.image" alt="item.title" />
				<p>{{item.title}}</p>
			</div>
		</swipe>
	    <div class = "section">
	    	<p class = "date" v-show = "false">{{Formdate}}</p>
	    	<div class = "item" v-for="item in sectionlist" @click = "Showdetail(item.id)">
	    		
	    		<img :src="item.images[0]" alt="item.title" />
	    		<p class = "title">{{item.title}}</p>
	    	</div>
	    </div>
	    <isloading :loading = loading></isloading>
	</div>
	
</template>

<script>
	import swiper from '../components/swiper/swiper.vue'
	import isloading from '../components/isLoading'
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
		isloading: isloading
	},
	computed: {
		Formdate() {
			return this.Fdate(this.date);
		}
	},
	methods: {
		Loademoj(bool) {
			console.log(1111);
		    this.$store.commit('Changeloading', bool);
		},
		GetData() {
			let that = this;
			api.Getnews().then(function(data) {
				that.Loademoj(false);
				that.date = data.data.date;
				that.toplist = data.data.top_stories;
				that.sectionlist = data.data.stories;
				console.log(data);
			}).catch(function(err) {
				console.log(err);
			});
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
   .wraper .swiper-slide{
   	position: relative;
   }
   .swiper-slide p{
   	width: 70%;
   	position: absolute;
   	top: 70%;
   	left:30%;
   	color: white;
   	font-size: 16px;
   	line-height: 32px;
   	font-weight: bold;
   }
   .section{
   	padding: 0 0.2rem;
   }
   .section .item{
   	width: 2.95rem;
   	height: 0.8rem;
   	padding: 0.1rem 0.2rem;
   	background: #fff;
   	border-radius: 5px;
   	margin-top: 20px;
   	box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.15);
   	clear: both;
   }
   .section img{
   	float: left;
   	width: 0.75rem;
   	height: 0.75rem;
   	margin-right: 0.1rem;
   	
   }
   .section p.title{
   	float:left;
   	width: 2rem;
   	font-size: 14px;
   	line-height:28px ;
   	margin-top: 0.1rem;
   	text-align: justify;
   	
   	word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden;  /** 隐藏超出的内容 **/
   	
   }
   .section p.date{
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