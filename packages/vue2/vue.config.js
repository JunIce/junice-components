const pkg = require('./package.json');
const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'; // 区分环境
const packageName = pkg.name;
const cdn = {
  css: [],
  js: [],
};

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  assetsDir: 'static',
  lintOnSave: !isProd,
  productionSourceMap: false,
  devServer: {
    port: process.env.VUE_APP_PORT,
    host: process.env.VUE_APP_HOST,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
    disableHostCheck: true,
    // proxy: {
    //   "/": {
    //     target: process.env.VUE_APP_BASE_API, // 本地
    //     secure: true, // false为http访问，true为https访问
    //     changeOrigin: true, // 跨域访问设置，true代表跨域
    //     pathRewrite: {
    //       // 路径改写规则
    //       "^/api": "",
    //     },
    //   },
    // },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          outputStyle: 'expanded',
        },
      },
    },
  },
  configureWebpack: (config) => {
    if (isProd) {
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
      };
      config.resolve.extensions = ['.js', '.json', '.vue', '.scss', '.css'];

      config.plugins.push(
        new CompressionPlugin({
          test: /\.(js|css|html)?$/i, // 压缩文件格式
          filename: '[path].gz[query]', // 压缩后的文件名
          algorithm: 'gzip', // 使用gzip压缩
          minRatio: 0.8, // 压缩率小于1才会压缩
        }),
      );
      // config.plugins.push(
      //   new TerserPlugin({
      //     terserOptions: {
      //       ie8: true,
      //       warnings: true,
      //       output: {
      //         comments: false,
      //         beautify: false,
      //       },
      //       compress: {
      //         drop_console: true,
      //         pure_funcs: [], // 移除console
      //       },
      //     },
      //   })
      // );
      config['performance'] = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.output.library(`${packageName}-[name]`).libraryTarget('esm');
    // .jsonpFunction(`webpackJsonp_${packageName}`);
    // 压缩图片
    // config.module
    //   .rule('images')
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .tap((options) => Object.assign(options, { limit: 20000 }));

    // config.module
    //   .rule('fonts')
    //   .test(/.(ttf|otf|eot|woff|woff2)$/)
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .options({})
    //   .end();
    // config.when(isProd, (config) => {
    //   config
    //     .plugin('html')
    //     .tap((args) => {
    //       args[0].cdn = cdn;
    //       return args;
    //     })
    //     .end();
    //   config
    //     .plugin('ScriptExtHtmlWebpackPlugin')
    //     .after('html')
    //     .use('script-ext-html-webpack-plugin', [
    //       {
    //         // `runtime` must same as runtimeChunk name. default is `runtime`
    //         inline: /runtime\..*\.js$/,
    //       },
    //     ])
    //     .end();
    //   config.optimization.splitChunks({
    //     chunks: 'all',
    //     cacheGroups: {
    //       libs: {
    //         name: 'chunk-libs',
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: 10,
    //         chunks: 'initial', // only package third parties that are initially dependent
    //       },
    //       elementUI: {
    //         name: 'chunk-elementUI', // split elementUI into a single package
    //         priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //         test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
    //       },
    //     },
    //   });
    //   config.optimization.runtimeChunk('single'),
    //     {
    //       from: path.resolve(__dirname, './public/robots.txt'), // 防爬虫文件
    //       to: './', // 到根目录下
    //     };
    // });
  },
});
