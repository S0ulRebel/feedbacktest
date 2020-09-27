import Vue from 'vue';
import Unicon from 'vue-unicons';
import { uniSearch } from 'vue-unicons/src/icons';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';

require('@/assets/styles/main.sass');

Vue.config.productionTip = false;

Unicon.add(uniSearch);
Vue.use(Unicon);

Vue.filter('formatDate', (value) => moment(value).format('MMMM Do YYYY.'));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
