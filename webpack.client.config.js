const path = require('path'),
  dirName = path.resolve('./'),
  chalk = require('chalk'),
  webpack = require('webpack'),
  TerserWebpackPlugin = require('terser-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  WorkboxPlugin = require('workbox-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  aid = require('aid.js');

const createClientConfig = (isDebug = false, options = { banner: '' }) => {
  const isDevelopmentEnv = aid.truthy(isDebug);

  let appEntry = ['./client/app.js'];

  let devTool = 'eval-source-map',
    // https://webpack.js.org/configuration/externals/
    externals = {},
    mode = 'development',
    optimization = {},
    plugins = [],
    stats = {
      // https://webpack.js.org/configuration/stats/
      colors: true,
      chunks: true,
    };

  let cssLoader = null;

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
      minimizer: [
        // https://webpack.js.org/plugins/terser-webpack-plugin
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
              warnings: false,
            },
            mangle: false,
          },
        }),
      ],
    };

    plugins = [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        // chunkFilename: 'css/[id].[hash].css',
      }),

      new HtmlWebpackPlugin({
        filename: path.resolve(dirName, './public/html', 'index.html'),
        template: path.resolve(dirName, './client/html', 'index.html'),
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
      new webpack.HotModuleReplacementPlugin(),
    ];

    // https://webpack.js.org/plugins/mini-css-extract-plugin/#hot-module-reloading-hmr
    cssLoader = {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: true,
            reloadAll: true,
          },
        },
        'css-loader',
      ],
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

      runtimeChunk: 'single', // to create single runtime bundle for all chunks
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },

          // https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-all-css-in-a-single-file
          styles: {
            name: 'app',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
      minimize: true,
      minimizer: [
        // https://webpack.js.org/plugins/terser-webpack-plugin
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
              warnings: true,
            },
            mangle: true,
            output: {
              preamble: options.banner || '',
            },
          },
        }),

        // https://github.com/NMFR/optimize-css-assets-webpack-plugin
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /.css$/g,
          cssProcessorOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true,
        }),
      ],
      usedExports: true,
    };

    plugins = [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
      }),

      // https://www.npmjs.com/package/uglifyjs-webpack-plugin
      new webpack.BannerPlugin({
        banner: options.banner || '',
        raw: true,
      }),

      new HtmlWebpackPlugin({
        filename: path.resolve(dirName, './public/html', 'index.html'),
        template: path.resolve(dirName, './client/html', 'index.html'),
      }),
    ];

    // https://webpack.js.org/plugins/mini-css-extract-plugin/#minimal-example
    cssLoader = {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: false,
          },
        },
        'css-loader',
      ],
    };
  }

  return {
    mode: mode,

    devtool: devTool,

    entry: {
      app: appEntry,
    },

    externals: externals,

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },

        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },

        {
          test: /\.(gif|png|jpg|jpeg|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                // context
                // emitFile: true
                name: '[name].[ext]?[contenthash]',
                outputPath: 'img/', // Specify a filesystem path where target the file(s) will be placed.
                // publicPath // Specifies a custom public path for the target file(s).
                // regExp
                // useRelativePath: false
              },
            },
          ],
        },

        {
          test: /\.(svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                fallback: 'file-loader',
                limit: 512, // url-loader can return a DataURL if the file is smaller than a byte limit.
                // mimetype,

                // file-loader fallback parameters
                name: '[name].[ext]?[contenthash]',
                outputPath: 'img/',
              },
            },
          ],
        },

        // url-loader transforms files into base64 URIs.
        // https://github.com/webpack-contrib/url-loader
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                fallback: 'file-loader',
                limit: 512, // url-loader can return a DataURL if the file is smaller than a byte limit.
                // mimetype,

                // file-loader fallback parameters
                name: '[name].[ext]?[contenthash]',
                outputPath: 'font/',
              },
            },
          ],
        },

        cssLoader,
      ],
    },

    optimization: optimization,

    plugins: plugins,

    output: {
      filename: isDevelopmentEnv ? 'js/[name].js' : 'js/[name].[contenthash].js',
      path: path.join(dirName, 'public'),
      publicPath: isDevelopmentEnv ? '/' : '/',
    },

    resolve: {
      alias: {
        shared: path.join(dirName, 'shared'),

        components: path.join(dirName, 'client', 'components'),
        constants: path.join(dirName, 'client', 'constants'),
        utils: path.join(dirName, 'client', 'utils'),
      },
    },

    stats: stats,

    target: 'web',
  };
};

module.exports = createClientConfig;
