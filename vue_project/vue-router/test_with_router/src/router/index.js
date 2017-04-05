import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import App2 from '@/views/App2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
        path: '/test/',
        name: 'test',
        component: Test
      },
    {
        path: '/app2/',
        name: 'App2',
        component: App2
      }      
  ]
})
