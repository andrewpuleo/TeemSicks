import Vue from 'vue';
//import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/js/dist/button.js';
import './../node_modules/slick-carousel/slick/slick.js';
import './../node_modules/slick-carousel/slick/slick.css';

Vue.config.productionTip = false;
//Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
