import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './pages/App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import(`./pages/views/Home/Home.vue`),
    },
    {
      path: '/foo',
      component: () => import(`./pages/views/Foo/index.vue`),
    },
  ],
});

createApp(App).use(router).mount('#app');
