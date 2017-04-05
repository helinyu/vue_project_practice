import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Align from '@/components/Align'
import Css3 from '@/components/Css3'
import Cell from '@/components/Cell'
import TestCompute from '@/components/TestCompute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Align',
      name: 'Align',
      component: Align
    },{
      path: '/Css3',
      name: 'Css3',
      component: Css3
    },{
     path: '/Cell',
      name: 'Cell',
      component: Cell
    },{
     path: '/TestCompute',
      name: 'TestCompute',
      component: TestCompute
    }
  ]
})
