import Vue from 'vue';
import App from './App.vue';
import Jue from '@junice/vue2';
import router from './router';
import '@junice/vue2/dist/junice.vue2.css';
import './styles/index.scss';

Vue.use(Jue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
