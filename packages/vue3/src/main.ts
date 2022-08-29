import { createApp } from 'vue';
import './style.css';
import App from './pages/App.vue';
import EC from './components';
import { router } from './router';

createApp(App).use(EC).use(router).mount('#app');
