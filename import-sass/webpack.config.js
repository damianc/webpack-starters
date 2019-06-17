const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	module: {
	    rules: [
	    	{
	    		test: /\.js$/,
	    		exclude: /node_modules/,
	    		use: [
	    			{
	    				loader: 'babel-loader'
	    			}
	    		]
	    	}, {
	    		test: /\.scss$/,
	    		use: [
	    			'style-loader', 'css-loader', 'sass-loader'
	    		]
	    	}
	    ]
	}
};
