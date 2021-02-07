import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

import router from './router/index'

Vue.use(Vuelidate)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app', 
  router
})