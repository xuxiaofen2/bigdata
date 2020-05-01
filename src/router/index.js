import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Weather from '../views/Weather.vue'
import Ticket from '../views/Ticket.vue'
import Nianka from '../views/Nianka.vue'
Vue.use(VueRouter)

  const routes = [
  {
	  path:'/',
	  redirect:'/user',
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/weather',
	component: Weather,
  },
  {
    path: '/ticket',
  	component: Ticket,
  },
  {
    path: '/nianka',
  	component: Nianka,
  },
]

const router = new VueRouter({
	mode:'history', //如果不配置mode，就会使用#设置路径
    routes
})

export default router
