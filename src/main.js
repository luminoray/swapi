import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import Movies from "@/components/Movies"
import Characters from "@/components/Characters"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  { path: '/', component: Movies },
  { path: '/:id', component: Characters }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
