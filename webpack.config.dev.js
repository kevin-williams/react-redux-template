const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const extractCSS = new ExtractTextPlugin('main.css');

module.exports = {
  entry: ['babel-polyfill', './src/index.js', './src/styles/main.scss'],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  devServer: {
    inline: true,
    port: 8080,
    sslPort: 8443,
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/i,
        use: extractCSS.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
      },
    ],
  },
  plugins: [extractCSS],
};
