const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = [
    new HtmlWebpackPlugin({
	  title: 'Basic Tailwind Webpack Starter',
      template: './src/index.html',
    }),
  ]