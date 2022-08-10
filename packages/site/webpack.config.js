const HTMLWebpackPlugin = require('html-webpack-plugin');
const SitePlugin = require("./plugins/site.plugin");
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ],
  },
  devServer: {
    port: '3003',
    hot: true,
  },
  plugins: [
    new SitePlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new VueLoaderPlugin(),
  ],
};
