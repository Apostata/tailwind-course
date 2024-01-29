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
    alias:{
      '@scripts': path.join(__dirname, 'src/js'),
      '@styles': path.join(__dirname, 'src/css'),
      '@images': path.join(__dirname, 'src/images'),
    }
  },
  module: { rules },
  plugins,
  devServer
};