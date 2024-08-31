const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const config = require('./webpack.dev');
const compiler = webpack(config);
const portNumber = 3000;

app.use(
  webpackDevMiddleware(
    compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true,
      },
    },
  ),
);

app.use(webpackHotMiddleware(compiler));

console.log('Starting server setup...');

app.listen(portNumber, function(err) {
  if (err) {
    console.log(`Error launching server. Error: ${err}`);
    return;
  };
  console.log(`Listening on port number ${portNumber}`);
});