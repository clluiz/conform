const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

function getComponentsTemplates() {
  const htmls = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src', 'index.html'),
    })];
  const componentsFolder = './src/components';
  const contents = fs.readdirSync(componentsFolder);
  const components = contents
                      .filter(content =>
                              ['.', '..'].indexOf(content) === -1 &&
                                fs.statSync(`${componentsFolder}/${content}`).isDirectory())
                      .map(content =>
                            (new HtmlWebpackPlugin({
                              filename: `components/${content}/${content}.html`,
                              template: path.resolve(__dirname, `./src/components/${content}`, `${content}.html`),
                              inject: false,
                            })
                          ));
  return htmls.concat(components);
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'scripts/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '.'),
    watchContentBase: true,
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: getComponentsTemplates(),
};
