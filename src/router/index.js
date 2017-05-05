import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import music from '@/view/music'
import movie from '@/view/movie'
import detail from '@/view/detail'
import come from '@/view/come'
import hot from '@/view/hot'
import search from '@/view/search'
import top from '@/view/top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },{
    	path:'/music',
    	name:'music',
    	component: music
    },
    {
    	path:'/movie',
    	name:'movie',
    	component: movie,
    	children:[
            {
            	path:'come',
            	name:'come',
            	component:come
            },
            {
            	path:'hot',
            	name:'hot',
            	component:hot
            },
            {
            	path:'search',
            	name:'search',
            	component:search
            },
            {
            	path:'top',
            	name:'top',
            	component:top
            }
    	]
    },
    {
    	path:'/detail/:id',
    	name:'detail',
    	component: detail
    },
    {
			path: '*',
			redirect: '/home'
		}
  ]
})
