import path from 'path';
import webpack from 'webpack';

const PATHS = {
	SRC: path.join(__dirname, 'src'),
	BUILD: path.join(__dirname, 'build'),
};


const prodConfig = {
  devtool: 'cheap-module-source-map',
	entry: path.join(PATHS.SRC, 'main.js'),
	output: {
    path: PATHS.BUILD,
		publicPath: '/',
		filename: 'bundle.js',
	},
	plugins: [
		// https://webpack.github.io/docs/optimization.html
		new webpack.optimize.OccurrenceOrderPlugin(),
		// Search for equal or similar files and deduplicate them in the output
		// https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
		new webpack.optimize.DedupePlugin(),

		// Minimize all JavaScript output of chunks
		// https://github.com/mishoo/UglifyJS2#compressor-options
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
				warnings: true,
			},
		}),
		new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
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

export default prodConfig;
