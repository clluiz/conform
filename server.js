const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 8080);

if (process.env.NODE_ENV === 'development') {
  const webpackConfig = require('./webpack.config.js');
  const webpack = require('webpack');
  const webpackMiddleWare = require('webpack-dev-middleware');

  app.use(webpackMiddleWare(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
}

app.get('*', (request, response) => {
  response.sendfile(path.join(__dirname, 'src/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Conform iniciado em ${app.get('port')}`);
});
