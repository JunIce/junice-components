import { App } from 'vue';

import EButton from './button';
import Pagination from './pagination';
import Panel from './panel';
import Table from './table';
import Tab from './tab';

// const files = import.meta.glob("./*/*.ts")

// console.log(files);

export default {
  install(app: App) {
    app.component(EButton.name, EButton);
    app.component(Pagination.name, Pagination);
    app.component(Panel.name, Panel);
    app.component(Table.name, Table);
    app.component(Tab.name, Tab);
  },
};
