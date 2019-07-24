const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, 'src')
		}
	}
};
