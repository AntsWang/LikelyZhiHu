<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	       <slot></slot>
	    </div>
        <div class="swiper-pagination"></div>
</div>
</template>

<script>
	import './swiper.js'
	export default {
	name: "m-swipe",
	data(){
		return {
			dom:""}
},
mounted: function() {
		var That = this;
		this.$nextTick(function() {

			var mySwiper = new Swiper('.swiper-container', {
				loop: true,
				//分页器
				pagination: '.swiper-pagination',
				// autoplay: That.autoplay,
				autoplay: 1000,
				//方向
				direction: 'horizontal',
				//特效
				effect: 'slide', //slide,fade,coverflow,cube
				autoplayDisableOnInteraction: false,
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true //修改swiper的父元素时，自动初始化swiper

			});
		})
	},
	computed: {
		Formdate() {

		}
	}
}</script>

<style>
@import './swiper.min.css';
.swiper-pagination-bullet-active {
	background: red;
}
.swiper-container{
	height: 3rem;
}
</style>