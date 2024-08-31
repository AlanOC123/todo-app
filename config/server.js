const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

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

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
})



app.listen(portNumber, function(err) {
  if (err) {
    console.log(`Error launching server. Error: ${err}`);
    return;
  };
  console.log(`Listening on port number ${portNumber}`);
});