import { createContainer } from './modal-container';
const files = require.context('.', true, /\.vue$/);

const install = (Vue, options) => {
  if (install.installed) return;
  install.installed = true;

  files.keys().forEach((ele) => {
    const ctrl = files(ele).default || files(ele);
    Vue.component(ctrl.name, ctrl);
  });

  if (Vue.prototype.$dialogContainer) {
    Vue.prototype.$dialogContainer = createContainer();
  }
};

// 如果是直接引入的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  createContainer,
};
