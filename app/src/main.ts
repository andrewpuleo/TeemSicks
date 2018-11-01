import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import VModal from 'vue-js-modal';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VModal);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
