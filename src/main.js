// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
Vue.use(Vuex);
Vue.config.productionTip = false
const store = new Vuex.Store({
    state:{
        loadingText:"正在加载", // 定义你的数据源
        isloading:"false",
        height:false//显示下拉加载，true显示, false隐藏
    },
    mutations:{
    	Changeloading(state,bool) {
    		state.isloading = bool;
    	},
    	Changeheight(state,bool) {
    		state.height = bool;
    	}
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
