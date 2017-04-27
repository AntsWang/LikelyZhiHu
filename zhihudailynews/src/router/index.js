import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import menu from '@/view/menu'
import detail from '@/view/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
    	path:'/menu',
    	name:'menu',
    	component: menu
    },
    {
    	path:'/detail/:id',
    	name:'detail',
    	component: detail
    },
    {
			path: '*',
			redirect: '/'
		}
  ]
})
