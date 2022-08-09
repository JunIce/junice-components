const setting = require("@haiking/micro-common/lib/plop-templates/index.js");
module.exports = function (plop) {
  setting.map((i) => {
    plop.setGenerator(i.name, require(i.url));
  });
};
