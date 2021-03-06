const path = require('path');

module.exports = {
	entry: './index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	resolve: {
		extensions: ['.ts']
	},
	module: {
	    rules: [
	    	{
	    		test: /\.(js|ts)$/,
	    		exclude: /node_modules/,
	    		use: [
	    			{
	    				loader: 'babel-loader'
	    			}
	    		]
	    	}
	    ]
	}
};
