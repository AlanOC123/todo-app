const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: [path.resolve(__dirname, '../src/index.js')]
  },
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    port: '3000',
    hot: true,
    open: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
    compress: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});