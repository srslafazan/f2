// TODO: make start kickass
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import devConfig from '../webpack.config.js';

const compiler = webpack(devConfig);

const server = new WebpackDevServer(compiler);
server.listen(8080, "localhost", function() {});
// server.close();
