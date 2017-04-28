import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import music from '@/view/music'
import movie from '@/view/movie'
import detail from '@/view/detail'

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
    	component: movie
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
