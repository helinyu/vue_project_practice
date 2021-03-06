import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/HelloFromVux'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/datetime',
      name: 'Datetime',
      component: require('@/components/Datetime')
    },
  ]
})
