module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/App.js":
/*!**********************************!*\
  !*** ./client/components/App.js ***!
  \**********************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var AppComp = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(AppComp, _Component);

  var _super = _createSuper(AppComp);

  function AppComp(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AppComp);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AppComp, [{
    key: "render",
    value: function render() {
      // Ref: https://www.youtube.com/watch?time_continue=123&v=Zjacr7_GZR0
      // https://reacttraining.com/react-router/web/example/basic
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, "header"));
    }
  }]);

  return AppComp;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var App = AppComp;
var ClientSideApp = AppComp;
/* harmony default export */ __webpack_exports__["default"] = (ClientSideApp);

/***/ }),

/***/ "./server/constants/config.js":
/*!************************************!*\
  !*** ./server/constants/config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var isDevelopmentEnv = function isDevelopmentEnv() {
  return "development" !== 'production';
};

var isDebugMode = function isDebugMode() {
  return process.env.DEBUG === 'true';
};

var useExternalStyles = function useExternalStyles() {
  return !isDevelopmentEnv.call(null);
};

module.exports = {
  isDevelopmentEnv: isDevelopmentEnv,
  isDebugMode: isDebugMode,
  useExternalStyles: useExternalStyles
};

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import { isLoggedIn } from "../utils/util";
var _require = __webpack_require__(/*! aid.js */ "aid.js"),
    truthy = _require.truthy,
    allOf = _require.allOf,
    each = _require.each;

var fs = __webpack_require__(/*! fs */ "fs");

var path = __webpack_require__(/*! path */ "path");

var dirName = path.resolve('./');

var express = __webpack_require__(/*! express */ "express");

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var React = __webpack_require__(/*! react */ "react");

var _require3 = __webpack_require__(/*! ../../client/components/App */ "./client/components/App.js"),
    App = _require3.App; // index router


var router = express.Router();
router.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('*', function (req, res) {
  var contents = renderToString( /*#__PURE__*/React.createElement(App, null));

  try {
    var indexTmpl = fs.readFileSync(path.resolve(dirName, './public/html/index.html'), {
      encoding: 'utf8'
    });
    var page = indexTmpl.replace('<div id="root"></div>', "<div id=\"root\">".concat(contents, "</div>"));
    res.send(page);
  } catch (error) {
    console.log('indexRouter: renderFullPage error :', error);
  } finally {}
});
/*
router.get('*', (req, res, next) => {
  // TODO: SSR
  const sheet = new ServerStyleSheet();
  const currentRoute = routes.find(route => matchPath(req.baseUrl, route)) || {};

  let store = createStore(rootReducer);
  let preloadedState = store.getState();
  let contents = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.baseUrl}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    )
  );

  let axiosRequest = currentRoute?.fetchDatas;
  if (axiosRequest) {
    console.log('indexRouter: need to fetch datas for SSR');
    try {
      axiosRequest()
        .then(responses => {
          each(responses, response => {
            const pathParts = response?.config?.url?.match(/\/([\w\d]+)(\.json)?$/);
            const key = pathParts?.length ? pathParts[1] : '';

            switch (key) {
              case 'careers':
              case 'awards':
              case 'works':
                if (preloadedState[key] && preloadedState[key].data) preloadedState[key].data = response.data;
                break;
            }
          });

          store = createStore(rootReducer, preloadedState);

          contents = renderToString(
            sheet.collectStyles(
              <StaticRouter location={req.baseUrl}>
                <Provider store={store}>
                  <App />
                </Provider>
              </StaticRouter>
            )
          );

          renderFullPage(res, contents, preloadedState, sheet);
        })
        .catch(error => {
          console.log('indexRouter: fetchDatas error :', error);
          renderFullPage(res, contents, preloadedState, sheet);
        });
    } catch (error) {
      console.log('indexRouter: axiosRequest error :', error);
      renderFullPage(res, contents, preloadedState, sheet);
    }
  } else {
    console.log('indexRouter: do not need to fetch datas for SSR');
    renderFullPage(res, contents, preloadedState, sheet);
  }
});
*/

function renderFullPage(res, contents, preloadedState, sheet) {
  try {
    var styleTags = (sheet === null || sheet === void 0 ? void 0 : sheet.getStyleTags()) || '';
    var indexTmpl = fs.readFileSync(path.resolve(dirName, './public/html/index.html'), {
      encoding: 'utf8'
    });
    var page = indexTmpl.replace('</head>', "".concat(styleTags, "</head>")).replace('<div id="root"></div>', "<div id=\"root\">".concat(contents, "</div>")).replace('window.__PRELOADED_STATE__', "window.__PRELOADED_STATE__ = ".concat(JSON.stringify(preloadedState).replace(/</g, "\\u003c")));
    res.send(page);
  } catch (error) {
    console.log('indexRouter: renderFullPage error :', error);
  } finally {
    sheet.seal();
  }
}

module.exports = router;

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! aid.js */ "aid.js"),
    allOf = _require.allOf;

var chalk = __webpack_require__(/*! chalk */ "chalk");

var path = __webpack_require__(/*! path */ "path");

var dirName = path.resolve('./');

var express = __webpack_require__(/*! express */ "express");

var helmet = __webpack_require__(/*! helmet */ "helmet");

var hpp = __webpack_require__(/*! hpp */ "hpp");

var cors = __webpack_require__(/*! cors */ "cors");

var morgan = __webpack_require__(/*! morgan */ "morgan");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");

var responseTime = __webpack_require__(/*! response-time */ "response-time");

var http = __webpack_require__(/*! http */ "http");

var compression = __webpack_require__(/*! compression */ "compression");

var config = __webpack_require__(/*! ./constants/config */ "./server/constants/config.js");

var indexRouter = __webpack_require__(/*! ./routes/index */ "./server/routes/index.js");

var port = process.env.PORT || 5000;
var isDisableKeepAlive = false;
/*
 * server
 */

var app = express();
var server = new http.Server(app);
console.log(chalk.bgRed('process.env.NODE_ENV :', "development"));
console.log(chalk.bgRed('process.env.DEBUG :', process.env.DEBUG));
console.log(chalk.bgRed('config.isDevelopmentEnv :', config.isDevelopmentEnv()));
console.log(chalk.bgRed('config.isDebugMode :', config.isDebugMode()));
/*
 * for only client webpack
 */

if (config.isDevelopmentEnv()) {
  console.log(chalk.bgRed('Using webpack-dev-middleware, webpack-hot-middleware. For dev only.'));

  var webpack = __webpack_require__(/*! webpack */ "webpack"),
      webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware"),
      webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware"),
      createClientConfig = __webpack_require__(/*! ../webpack.client.config */ "./webpack.client.config.js"),
      devClientWebpackCompiler = webpack(createClientConfig(true));

  app.use(webpackDevMiddleware(devClientWebpackCompiler, {
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
      version: false
    }
  })).use(webpackHotMiddleware(devClientWebpackCompiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}
/*
 * configuration
 */


app.use(responseTime()).use(helmet()).use(helmet.hidePoweredBy({
  setTo: 'react'
})).use(compression()).use(cookieParser()).use(bodyParser.json()).use(bodyParser.urlencoded({
  extended: false
})).use(hpp()).use(cors()).use(morgan('combined')).use(express["static"]('public')).use(function (req, res, next) {
  // custom middleware
  if (isDisableKeepAlive === true) res.set('Connection', 'close');
  next();
}); // TODO: router setting

app.use('*', indexRouter); // error

app.use(function (error, req, res, next) {
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};
  res.status(error.status || 500);
  next();
});
/*
 * Setting for '$gulp dev' task. run server
 */

function startServer(_server) {
  _server.listen(port, function () {
    // action for pm2 ecosystem.config.js wait_ready:true setting
    if (process.send) process.send('ready');
    console.log(chalk.bgRed("started server on ".concat(port)));
  });
}

if (allOf(config.isDevelopmentEnv(), config.isDebugMode())) {
  console.log('Call startServer function for debug mode based on nodemon');
  startServer(server);
}

/***/ }),

/***/ "./webpack.client.config.js":
/*!**********************************!*\
  !*** ./webpack.client.config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path"),
    dirName = path.resolve('./'),
    chalk = __webpack_require__(/*! chalk */ "chalk"),
    webpack = __webpack_require__(/*! webpack */ "webpack"),
    TerserWebpackPlugin = __webpack_require__(/*! terser-webpack-plugin */ "terser-webpack-plugin"),
    MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ "mini-css-extract-plugin"),
    OptimizeCssAssetsPlugin = __webpack_require__(/*! optimize-css-assets-webpack-plugin */ "optimize-css-assets-webpack-plugin"),
    HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ "html-webpack-plugin"),
    WorkboxPlugin = __webpack_require__(/*! workbox-webpack-plugin */ "workbox-webpack-plugin"),
    CopyWebpackPlugin = __webpack_require__(/*! copy-webpack-plugin */ "copy-webpack-plugin"),
    aid = __webpack_require__(/*! aid.js */ "aid.js");

var createClientConfig = function createClientConfig() {
  var isDebug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    banner: ''
  };
  var isDevelopmentEnv = aid.truthy(isDebug);
  var appEntry = ['./client/app.js'];
  var devTool = 'eval-source-map',
      // https://webpack.js.org/configuration/externals/
  externals = {},
      mode = 'development',
      optimization = {},
      plugins = [],
      stats = {
    // https://webpack.js.org/configuration/stats/
    colors: true,
    chunks: true
  };
  var cssLoader = null;

  if (isDevelopmentEnv) {
    // develop env
    console.log(chalk.bgRed('webpack.client.config.js : development env'));
    mode = 'development';
    devTool = '';
    externals = {};
    optimization = {
      /*
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
      */
      minimize: false,
      minimizer: [// https://webpack.js.org/plugins/terser-webpack-plugin
      new TerserWebpackPlugin({
        cache: false,
        parallel: true,
        sourceMap: false,
        terserOptions: {
          warnings: true,
          compress: {
            dead_code: false,
            drop_console: false,
            drop_debugger: false,
            unused: false,
            warnings: false
          },
          mangle: false
        }
      })]
    };
    plugins = [new MiniCssExtractPlugin({
      filename: 'css/[name].css' // chunkFilename: 'css/[id].[hash].css',

    }), new HtmlWebpackPlugin({
      filename: path.resolve(dirName, './public/html', 'index.html'),
      template: path.resolve(dirName, './client/html', 'index.html')
    }),
    /*
    // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
    // https://webpack.js.org/guides/progressive-web-application/
    new WorkboxPlugin.InjectManifest({
      swDest: path.resolve(dirName, "./public/", "service-worker.js"),
      // importWorkboxFrom: 'cdn',
      // chunks: [],
      // excluedChunks: [],
      // provided when creating precache manifest. Only include this assets when precaching.
      // include: [/\.html$/, /\.js$/, /\.css$/, /\.eot$/, /\.ttf$/, /\.woff$/, /\.woff2$/, /\.png$/, /\.gif$/, /\.jpg$/, /\.jpeg$/, /\.svg$/, /\.ico$/],
      // exclude: [/\.map$/, /^manifest.*\.js$/],
      // importsDirectory: '',
      // precacheManifestFilename: 'precache-manifest.[manifestHash].js',
      swSrc: path.resolve(dirName, "./client/", "service-worker.js"),
    }),
    
    new CopyWebpackPlugin([
      {
        from: path.resolve(dirName, "./client/", "manifest.webmanifest"),
        to: path.resolve(dirName, "./public/", "manifest.webmanifest"),
      },
    ]),
    */
    // https://webpack.js.org/guides/hot-module-replacement/
    new webpack.HotModuleReplacementPlugin()]; // https://webpack.js.org/plugins/mini-css-extract-plugin/#hot-module-reloading-hmr

    cssLoader = {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: true,
          reloadAll: true
        }
      }, 'css-loader']
    };
  } else {
    // production env
    console.log(chalk.bgRed('webpack.client.config.js : production env'));
    mode = 'production';
    devTool = 'hidden-source-map';
    externals = {};
    optimization = {
      // Ref:
      // https://webpack.js.org/configuration/optimization/#optimization-runtimechunk
      // https://webpack.js.org/guides/caching/#extracting-boilerplate
      // https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
      // https://webpack.js.org/guides/code-splitting/#prevent-duplication
      // https://webpack.js.org/guides/code-splitting/#dynamic-imports
      runtimeChunk: 'single',
      // to create single runtime bundle for all chunks
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          },
          // https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-all-css-in-a-single-file
          styles: {
            name: 'app',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      },
      minimize: true,
      minimizer: [// https://webpack.js.org/plugins/terser-webpack-plugin
      new TerserWebpackPlugin({
        cache: false,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          warnings: true,
          compress: {
            dead_code: true,
            drop_console: true,
            drop_debugger: true,
            unused: true,
            warnings: true
          },
          mangle: true,
          output: {
            preamble: options.banner || ''
          }
        }
      }), // https://github.com/NMFR/optimize-css-assets-webpack-plugin
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /.css$/g,
        cssProcessorOptions: {
          preset: ['default', {
            discardComments: {
              removeAll: true
            }
          }]
        },
        canPrint: true
      })],
      usedExports: true
    };
    plugins = [new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }), // https://www.npmjs.com/package/uglifyjs-webpack-plugin
    new webpack.BannerPlugin({
      banner: options.banner || '',
      raw: true
    }), new HtmlWebpackPlugin({
      filename: path.resolve(dirName, './public/html', 'index.html'),
      template: path.resolve(dirName, './client/html', 'index.html')
    })]; // https://webpack.js.org/plugins/mini-css-extract-plugin/#minimal-example

    cssLoader = {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: false
        }
      }, 'css-loader']
    };
  }

  return {
    mode: mode,
    devtool: devTool,
    entry: {
      app: appEntry
    },
    externals: externals,
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }, {
        test: /\.(gif|png|jpg|jpeg|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            // context
            // emitFile: true
            name: '[name].[ext]?[contenthash]',
            outputPath: 'img/' // Specify a filesystem path where target the file(s) will be placed.
            // publicPath // Specifies a custom public path for the target file(s).
            // regExp
            // useRelativePath: false

          }
        }]
      }, {
        test: /\.(svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
            limit: 512,
            // url-loader can return a DataURL if the file is smaller than a byte limit.
            // mimetype,
            // file-loader fallback parameters
            name: '[name].[ext]?[contenthash]',
            outputPath: 'img/'
          }
        }]
      }, // url-loader transforms files into base64 URIs.
      // https://github.com/webpack-contrib/url-loader
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
            limit: 512,
            // url-loader can return a DataURL if the file is smaller than a byte limit.
            // mimetype,
            // file-loader fallback parameters
            name: '[name].[ext]?[contenthash]',
            outputPath: 'font/'
          }
        }]
      }, cssLoader]
    },
    optimization: optimization,
    plugins: plugins,
    output: {
      filename: isDevelopmentEnv ? 'js/[name].js' : 'js/[name].[contenthash].js',
      path: path.join(dirName, 'public'),
      publicPath: isDevelopmentEnv ? '/' : '/'
    },
    resolve: {
      alias: {
        shared: path.join(dirName, 'shared'),
        components: path.join(dirName, 'client', 'components'),
        constants: path.join(dirName, 'client', 'constants'),
        utils: path.join(dirName, 'client', 'utils')
      }
    },
    stats: stats,
    target: 'web'
  };
};

module.exports = createClientConfig;

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "aid.js":
/*!*************************!*\
  !*** external "aid.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aid.js");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "copy-webpack-plugin":
/*!**************************************!*\
  !*** external "copy-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("copy-webpack-plugin");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "hpp":
/*!**********************!*\
  !*** external "hpp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "optimize-css-assets-webpack-plugin":
/*!*****************************************************!*\
  !*** external "optimize-css-assets-webpack-plugin" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("optimize-css-assets-webpack-plugin");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "response-time":
/*!********************************!*\
  !*** external "response-time" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("response-time");

/***/ }),

/***/ "terser-webpack-plugin":
/*!****************************************!*\
  !*** external "terser-webpack-plugin" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("terser-webpack-plugin");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "workbox-webpack-plugin":
/*!*****************************************!*\
  !*** external "workbox-webpack-plugin" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("workbox-webpack-plugin");

/***/ })

/******/ });