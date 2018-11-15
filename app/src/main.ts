import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import VModal from 'vue-js-modal';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VModal);
Vue.use(Vuex);

Vue.use(require('vue-moment'));

new Vue({
   el: '#app',
 data () {
   return {
     toggle: true
   }
 },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
