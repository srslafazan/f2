// TODO: make tools/build awesome
import webpack from 'webpack';
import devConfig from '../webpack.config.js';
import prodConfig from '../webpack.production.config.js';
import ProgressPlugin from 'webpack/lib/ProgressPlugin';

let compiler;

const DEV = process.argv.includes('--development');
const PROD = process.argv.includes('--production');

// config if development
if (DEV)
  compiler = webpack(devConfig);

  // config if production
if (PROD)
  compiler = webpack(prodConfig);



// run the compiler
compiler.run((err, stats) => {
  if (err)
    return handleFatalError(err);

  const jsonStats = stats.toJson();

  if (jsonStats.errors.length > 0)
    return handleSoftErrors(jsonStats.errors);

  if (jsonStats.warnings.length > 0)
      handleWarnings(jsonStats.warnings);

  successfullyCompiled();
});

// show build progress
compiler.apply(new ProgressPlugin( (percentage, msg) => {
  console.log((percentage * 100) + '%', msg);
}));

//
// webpack results callbacks
//
function successfullyCompiled() {
  const type = PROD ? 'production' : 'development';
  console.log(`Completed bundle for ${type}, sir!`);
}

function handleFatalError(error) {
  console.log('Fatal error: ');
  console.log(error);
}

function handleSoftErrors(errors) {
  errors.forEach((error) => {
    console.log('Soft Error: ', error);
  });
}

function handleWarnings(warnings) {
  warnings.forEach((warning) => {
    console.log('Warning: ', warning);
  });
}
