// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './tools/api'
import store from './store'
import VueLazyload from 'vue-lazyload' // 懒加载

Vue.config.productionTip = false
Vue.prototype.api = api
/**
 * @desc 懒加载配置
 * @author LH
 */
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: '../static/error.jpg',
	loading: '../static/loading.gif',
	attempt: 1
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {App }
})