// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import vuexI18n from 'vuex-i18n';
import Vuex from 'vuex';

// initialize the vuex store using the vuex module. note that you can change the
//  name of the module if you wish
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});
Vue.use(vuexI18n.plugin, store);


Vue.use(VueRouter)

const routes = [
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


const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
