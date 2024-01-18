const path = require('path');
const rules = require('./webpack-config/rules');
const devServer = require('./webpack-config/devServer');
const plugins = require('./webpack-config/plugins');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: { rules },
  plugins,
  devServer
};