const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = [
    new HtmlWebpackPlugin({
    cache: false,
	  title: 'Basic Tailwind Webpack Starter',
      template: 'src/index.html',
    }),
  ]