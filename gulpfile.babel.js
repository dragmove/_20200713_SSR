const pkg = require('./package.json'),
  gulp = require('gulp'),
  chalk = require('chalk'),
  webpack = require('webpack'),
  rimraf = require('rimraf'),
  nodemon = require('gulp-nodemon'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  createServerConfig = require('./webpack.server.config'),
  createClientConfig = require('./webpack.client.config'),
  run = require('gulp-run-command').default;

const $ = gulpLoadPlugins();

/*
 * utils
 */
const banner = () => {
  return `/*
 * ${pkg.name} ${pkg.version}
 * ${pkg.homepage}
 *
 * The MIT License (MIT)
 * Copyright (c) 2020 Hyunseok.Kim, dragmove@gmail.com
 */
`;
};

/*
 * gulp tasks
 */
// clean
gulp.task('clean:server', cb => rimraf('./index.js', cb));
gulp.task('clean:client', cb => rimraf('./public', cb));
gulp.task('clean', gulp.parallel('clean:server', 'clean:client'));

// build develop, production: only back-end
gulp.task('build:dev-server', cb => buildDevServer(cb));
gulp.task('build:prod-server', cb => buildProdServer(cb));

// build develop, production: only front-end
gulp.task('build:dev-client', cb => buildDevClient(cb));
gulp.task('build:prod-client', cb => buildProdClient(cb));

// build develop: back-end + front-end
gulp.task('build:dev', gulp.series('clean', 'build:dev-server', 'build:dev-client'));

// build production: back-end + front-end
gulp.task('build:prod', gulp.series('clean', 'build:prod-server', 'build:prod-client'));

// run develop environment: back-end + front-end
gulp.task(
  'dev',
  gulp.series('clean', 'build:dev-server', 'build:dev-client', gulp.parallel(addDevServerHooks, reloadDevServer))
);

// TODO: Make running task. // run production environment: back-end + front-end

/*
 * private server tasks
 */
const devServerWebpackCompiler = webpack(
    createServerConfig(true, {
      banner: banner(),
    })
  ),
  prodServerWebpackCompiler = webpack(
    createServerConfig(false, {
      banner: banner(),
    })
  );

// build ./server/server.js application to /server.js
function buildDevServer(callback) {
  devServerWebpackCompiler.hooks.done.tap('DevServerWebpackCompilerHooksDone', stats => {
    // https://webpack.js.org/api/compiler-hooks/#done
    console.log(chalk.bgGreen('DevServerWebpackCompilerHooksDone. Executed when the compilation has completed.'));
  });

  devServerWebpackCompiler.hooks.failed.tap('DevServerWebpackCompilerHooksFailed', (fileName, changeTime) => {
    // https://webpack.js.org/api/compiler-hooks/#failed
    console.log(
      chalk.bgRed('DevServerWebpackCompilerHooksFailed. Executed when a watching compilation has been invalidated.')
    );
  });

  devServerWebpackCompiler.run((error, stats) => {
    printWebpackLog('build:dev-server', error, stats);
    callback();
  });
}

function buildProdServer(callback) {
  prodServerWebpackCompiler.hooks.done.tap('ProdServerWebpackCompilerHooksDone', stats => {
    // https://webpack.js.org/api/compiler-hooks/#done
    console.log(chalk.bgGreen('ProdServerWebpackCompilerHooksDone. Executed when the compilation has completed.'));
  });

  prodServerWebpackCompiler.hooks.failed.tap('ProdServerWebpackCompilerHooksFailed', (fileName, changeTime) => {
    // https://webpack.js.org/api/compiler-hooks/#failed
    console.log(
      chalk.bgRed('ProdServerWebpackCompilerHooksFailed. Executed when a watching compilation has been invalidated.')
    );
  });

  prodServerWebpackCompiler.run((error, stats) => {
    printWebpackLog('build:prod-server', error, stats);
    callback();
  });
}

function addDevServerHooks() {
  // Add additional hooks
}

function reloadDevServer(done) {
  const stream = $.nodemon({
    script: './index.js',
    watch: 'server',
    env: {
      NODE_ENV: 'development',
      DEBUG: 'true', // only used in 'gulp dev' process for local test
    },
    done: done,
  });

  stream
    .on('start', () => {
      console.log(chalk.bgGreen('nodemon start.'));
    })
    .on('restart', () => {
      console.log(chalk.bgGreen('nodemon restarted.'));
    })
    .on('exit', () => {
      console.log(chalk.bgGreen('nodemon exit.'));
    })
    .on('crash', () => {
      console.log(chalk.bgRed('nodemon crashed.'));
    });

  return stream;
}

/*
 * private client tasks
 */
const devClientWebpackCompiler = webpack(
  createClientConfig(true, {
    banner: banner(),
  })
);

const prodClientWebpackCompiler = webpack(
  createClientConfig(false, {
    banner: banner(),
  })
);

function buildDevClient(callback) {
  devClientWebpackCompiler.hooks.done.tap('DevClientWebpackCompilerHooksDone', stats => {
    // https://webpack.js.org/api/compiler-hooks/#done
    console.log(chalk.bgGreen('DevClientWebpackCompilerHooksDone. Executed when the compilation has completed.'));
  });

  devClientWebpackCompiler.hooks.failed.tap('DevClientWebpackCompilerHooksFailed', (fileName, changeTime) => {
    // https://webpack.js.org/api/compiler-hooks/#failed
    console.log(
      chalk.bgRed('DevClientWebpackCompilerHooksFailed. Executed when a watching compilation has been invalidated.')
    );
  });

  devClientWebpackCompiler.run((error, stats) => {
    printWebpackLog('dev:client', error, stats);
    callback();
  });
}

function buildProdClient(callback) {
  prodClientWebpackCompiler.hooks.done.tap('ProdClientWebpackCompilerHooksDone', stats => {
    // https://webpack.js.org/api/compiler-hooks/#done
    console.log(chalk.bgGreen('ProdClientWebpackCompilerHooksDone. Executed when the compilation has completed.'));
  });

  prodClientWebpackCompiler.hooks.failed.tap('ProdClientWebpackCompilerHooksFailed', (fileName, changeTime) => {
    // https://webpack.js.org/api/compiler-hooks/#failed
    console.log(
      chalk.bgRed('ProdClientWebpackCompilerHooksFailed. Executed when a watching compilation has been invalidated.')
    );
  });

  prodClientWebpackCompiler.run((error, stats) => {
    printWebpackLog('prod:client', error, stats);
    callback();
  });
}

/*
 * helper
 */
function printWebpackLog(label, error, stats) {
  if (error) throw new Error(error);

  if (stats.hasErrors()) {
    console.log(stats.toString({ colors: true }));
  } else {
    const time = stats.endTime - stats.startTime;
    console.log(chalk.bgGreen(`Built ${label} in ${time} ms`));
  }
}
