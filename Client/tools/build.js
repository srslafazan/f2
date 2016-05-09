// TODO: figure out how to make tools/build awesome
import webpack from 'webpack';
import config from '../webpack.config.js';



const compiler = webpack(config, function(err, stats) {

});


// var ProgressPlugin = require('webpack/lib/ProgressPlugin');
// compiler.apply(new ProgressPlugin( (percentage, msg) => {
//   console.log((percentage * 100) + '%', msg);
// }));