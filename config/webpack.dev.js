const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: ['webpack-hot-middleware/client', path.resolve(__dirname, '../src/index.js')]
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    port: '3000',
    client: {
      overlay: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});