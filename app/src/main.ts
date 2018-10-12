import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/jquery/dist/jquery.min.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
