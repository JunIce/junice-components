const files = require.context(".", false, /\.js$/);
export default {
  install: function (Vue) {
    files.keys().forEach((element) => {
      if (element === "./index.js") return;
      Vue.directive(
        element.replace(/^\.\/(.*)\.\w+$/, "$1"),
        files(element).default
      );
    });
  },
};
