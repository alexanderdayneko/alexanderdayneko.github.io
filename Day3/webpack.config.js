'use strict'

module.exports =
{
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "build.js"
    },

	module: {
	  loaders: [
	    {
	      	test: /\.js$/,
	      	exclude: /(node_modules|bower_components)/,
	      	loader: 'babel',
	      	query: {
	        presets: ['es2015']
	      }
	   	},
	   	{ test: /\.css$/, loader: "style-loader!css-loader" }
	   ]
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: ['node_modules', 'src'],
        root: './src'   
    },
    resolveLoader: {
    	moduleDirectories: ['node-modules'],
    	moduleTemplates: ['*-loader', '*'],
    	extensions: ['', '.js']
    },
    watch: true,
    devtool: "source-map"

}

