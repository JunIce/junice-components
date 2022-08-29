import { App } from 'vue';

import EButton from './button';

export default {
  install(app: App) {
    app.component(EButton.name, EButton);
  },
};
