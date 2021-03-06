var path = require('path');
var webpack = require('webpack');

var PATHS = {
	SRC: path.join(__dirname, 'src'),
	BUILD: path.join(__dirname, 'build'),
};


var devConfig = {
  devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		path.join(PATHS.SRC, 'main.js'),
	],
	output: {
    path: PATHS.BUILD,
		publicPath: '/',
		filename: 'bundle.js',
	},
	// NOTE: only contentBase and port appear to register
	devServer: {
		port: 8080,
		contentBase: PATHS.SRC,
  },
	plugins: [],
	module: {
		loaders: [
			// https://github.com/babel/babel-loader#options
			// https://babeljs.io/docs/usage/options/
			{
				test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loaders: ['react-hot', 'babel'],
    	},
			// CSS Modules https://github.com/css-modules/css-modules
    	{
        test: /\.(less)$/,
				loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader!less',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: '[hash].[ext]',
          limit: 10000,
        },
      },
      {
    		test:   /\.html/,
    		loader: 'html',
			},
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: '[hash].[ext]',
        },
      },
		],
	},
};

module.exports = devConfig;
