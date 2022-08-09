import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/router';

import '@/assets/styles/index.scss'; // 全局样式

import directive from '@/directive'; // directive
import filters from '@/filters';

Vue.use(directive);
Vue.use(filters);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
