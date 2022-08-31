import { createApp } from 'vue';
import './style.css';
import './styles/index.scss';
import App from './pages/App.vue';
import EC from './components';
import { router } from './router';

createApp(App).use(EC).use(router).mount('#app');
