import { App } from 'vue';

import EButton from './button';
import Pagination from './pagination';

export default {
  install(app: App) {
    app.component(EButton.name, EButton);
    app.component(Pagination.name, Pagination);
  },
};
