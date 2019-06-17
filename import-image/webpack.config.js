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
	    		test: /\.(png|jpe?g|gif)$/,
	    		use: [
	    			{loader: 'url-loader', options: {
	    				limit: 8192 // 8 MB
	    			}}
	    		]
	    	}
	    ]
	}
};
