const { allOf } = require('aid.js');
const chalk = require('chalk');
const path = require('path');
const dirName = path.resolve('./');
const express = require('express');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const responseTime = require('response-time');
const http = require('http');
const compression = require('compression');

const config = require('./constants/config');
const indexRouter = require('./routes/index');
const port = process.env.PORT || 5000;
const isDisableKeepAlive = false;

/*
 * server
 */
const app = express();
const server = new http.Server(app);

console.log(chalk.bgRed('process.env.NODE_ENV :', process.env.NODE_ENV));
console.log(chalk.bgRed('process.env.DEBUG :', process.env.DEBUG));
console.log(chalk.bgRed('config.isDevelopmentEnv :', config.isDevelopmentEnv()));
console.log(chalk.bgRed('config.isDebugMode :', config.isDebugMode()));

/*
 * for only client webpack
 */
if (config.isDevelopmentEnv()) {
  console.log(chalk.bgRed('Using webpack-dev-middleware, webpack-hot-middleware. For dev only.'));

  const webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    createClientConfig = require('../webpack.client.config'),
    devClientWebpackCompiler = webpack(createClientConfig(true));

  app
    .use(
      webpackDevMiddleware(devClientWebpackCompiler, {
        logTime: true,
        // https://webpack.js.org/guides/public-path
        publicPath: '/',
        // https://webpack.js.org/configuration/stats/#stats
        stats: {
          assets: false,
          chunks: false,
          colors: true,
          hash: false,
          modules: false,
          timings: false,
          version: false,
        },
      })
    )
    .use(
      webpackHotMiddleware(devClientWebpackCompiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
      })
    );
}

/*
 * configuration
 */
app
  .use(responseTime())
  .use(helmet())
  .use(helmet.hidePoweredBy({ setTo: 'react' }))
  .use(compression())
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(hpp())
  .use(cors())
  .use(morgan('combined'))
  .use(express.static('public'))
  .use((req, res, next) => {
    // custom middleware
    if (isDisableKeepAlive === true) res.set('Connection', 'close');

    next();
  });

// TODO: router setting
app.use('*', indexRouter);

// error
app.use((error, req, res, next) => {
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  res.status(error.status || 500);

  next();
});

/*
 * Setting for '$gulp dev' task. run server
 */
function startServer(_server) {
  _server.listen(port, () => {
    // action for pm2 ecosystem.config.js wait_ready:true setting
    if (process.send) process.send('ready');

    console.log(chalk.bgRed(`started server on ${port}`));
  });
}

if (allOf(config.isDevelopmentEnv(), config.isDebugMode())) {
  console.log('Call startServer function for debug mode based on nodemon');
  startServer(server);
}
