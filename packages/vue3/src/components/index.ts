import { App } from 'vue';

import EButton from './button';
import Pagination from './pagination';
import Panel from './panel';

export default {
  install(app: App) {
    app.component(EButton.name, EButton);
    app.component(Pagination.name, Pagination);
    app.component(Panel.name, Panel);
  },
};
