import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

document.title = '崆峒智慧旅游产业运行监测平台'
