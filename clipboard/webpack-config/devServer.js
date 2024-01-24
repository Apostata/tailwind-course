const path = require('path')
module.exports = {
	static: {
		directory: path.join(__dirname, '../dist'),
		serveIndex: true,
	},
	watchFiles: {
		paths: ['src/**/*.*'],
		options: {
		  usePolling: true,
		},
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