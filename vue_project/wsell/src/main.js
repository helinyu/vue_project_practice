// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import route from './route.js'

import Mint from 'mint-ui';

Vue.use(Mint);

var mycomponent = Vue.extend({
	template:'<div> a Custom component!</div>'
})
Vue.component('my-component','mycomponent');

Vue.config.productionTip =

Vue.use(VueRouter);

const router = new VueRouter({
  route
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
