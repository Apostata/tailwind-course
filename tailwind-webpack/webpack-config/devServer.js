const path = require('path')
module.exports = {
	watchFiles: ['src/index.html'], // Watch for changes in html only
	static: {
		directory: path.join(__dirname, '../dist'),
		serveIndex: true,
	},
	compress: true,
	port: 3001,
	hot: true,
	open: true,
	
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
		"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
	},
	client: {
		overlay: {
			errors: true,
			warnings: false,
		}
	}
  }