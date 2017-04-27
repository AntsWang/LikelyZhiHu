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
			dom:""
		}
	},
   mounted:function(){
            this.$nextTick(function(){
               
                var mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay:1000,
                    pagination: '.swiper-pagination'
                
                });
            })
   },
   computed:{
   	Formdate() {
   		
   	}
   }
}
</script>

<style>
@import './swiper.min.css';
.swiper-pagination-bullet-active {
	background: red;
}
.swiper-container{
	height: 3rem;
}
</style>