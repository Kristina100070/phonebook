import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Contact from './pages/Contact'
import MainPage from './pages/MainPage'
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: Contact
    },
    
  ],
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
