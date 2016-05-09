var path = require('path');
var webpack = require('webpack');

var ENV = process.env.NODE_ENV;
var PRODUCTION = (ENV === 'production');

var PATHS = {
	SRC: path.join(__dirname, 'src'),
	BUILD: path.join(__dirname, 'build'),
};

var entry = [
   path.join(PATHS.SRC, 'main.js'),
];
if (!PRODUCTION) {
	var hot = [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
	];
	entry = hot.concat(entry);
}


module.exports = {
  devtool: PRODUCTION ? 'cheap-module-source-map' : 'source-map',
	entry: entry,
	output: {
    path: PATHS.BUILD,
		publicPath: '/',
		filename: 'bundle.js',
	},
	// // NOTE: only contentBase and port appear to register
	// devServer: {
	// 	port: 8080,
	// 	contentBase: PATHS.SRC,
  // },
	plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loaders: ['react-hot', 'babel'],
    	},
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
