// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Store from './Store'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter(

);

//创建Store实例
const store = new Vuex.Store({
  // 存储状态值
  state: {
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {
  },
  actions: {
  }
})
// 要改变状态值只能通过提交mutations来完成


/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
