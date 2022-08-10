const pluginName = 'SitePlugin';

class SitePlugin {
  constructor(options) {
    this.options
  }
  apply(compiler) {
    compiler.hooks.done.tap(pluginName, (compilation) => {
      console.log('hook log');
    });
  }
}

module.exports = SitePlugin;
