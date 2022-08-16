import Vue from 'vue';
import App from './App.vue';
import Comps from '@junice/vue2';
import router from './router';
// import hljs from 'highlight.js';
import '@junice/vue2/dist/rj_12.vue.lib.css';
// import 'highlight.js/styles/default.css';
import './styles/index.scss';

Vue.use(Comps);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
