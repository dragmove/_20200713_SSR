const path = require('path'),
  fs = require('fs'),
  dirName = path.resolve('./'),
  chalk = require('chalk'),
  webpack = require('webpack'),
  nodeExternals = require('webpack-node-externals'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  // https://webpack.js.org/plugins/terser-webpack-plugin/#root
  TerserWebpackPlugin = require('terser-webpack-plugin'),
  aid = require('aid.js');

const createServerConfig = (isDebug = false, options = { banner: '' }) => {
  const isDevelopmentEnv = aid.truthy(isDebug);
  const appEntry = './server/server.js';

  let devTool = 'eval-source-map',
    mode = '',
    plugins = [],
    // https://webpack.js.org/configuration/externals/#function
    externals = [nodeExternals()], // [ignoreNodeModules],
    optimization = {},
    stats = {
      // https://webpack.js.org/configuration/stats/
      colors: true,
      chunks: true,
    };

  if (isDevelopmentEnv) {
    // develop env
    console.log(chalk.bgRed('webpack.server.config.js : development env'));

    mode = 'development';

    devTool = '';

    plugins = [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
      }),
    ];

    optimization = {
      minimize: false,
      minimizer: [
        // https://webpack.js.org/plugins/terser-webpack-plugin
        new TerserWebpackPlugin({
          cache: false,
          parallel: true,
          sourceMap: false,
          terserOptions: {
            // ecma: undefined,
            warnings: true,
            // parse: {},
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
      usedExports: false,
    };
  } else {
    // production env
    console.log(chalk.bgRed('webpack.server.config.js : production env'));

    mode = 'production';

    devTool = 'source-map';

    plugins = [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
      }),

      // https://www.npmjs.com/package/uglifyjs-webpack-plugin
      new webpack.BannerPlugin({
        banner: options.banner || '',
        raw: true,
      }),
    ];

    optimization = {
      minimize: true,
      minimizer: [
        // https://webpack.js.org/plugins/terser-webpack-plugin
        new TerserWebpackPlugin({
          cache: false,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            // ecma: undefined,
            warnings: true,
            // parse: {},
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
      ],
      usedExports: true,
    };
  }

  return {
    mode: mode,

    context: dirName,

    devtool: devTool,

    entry: appEntry,

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
                emitFile: false,
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
                emitFile: false,
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

                name: '[name].[ext]?[contenthash]',
                outputPath: 'font/',
              },
            },
          ],
        },

        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: true,
                reloadAll: true,
              },
            },

            {
              loader: 'css-loader',
              options: {
                onlyLocals: true,
              },
            },
          ],
        },
      ],
    },

    optimization: optimization,

    // https://webpack.js.org/configuration/output/
    output: {
      filename: 'index.js',
      path: path.join(dirName),
      publicPath: isDevelopmentEnv ? '/' : '/',
      libraryTarget: 'commonjs2',
    },

    plugins: plugins,

    resolve: {
      alias: {
        shared: path.join(dirName, 'shared'),

        // When you apply server-side rendering, refer to webpack.client.config.js file
        components: path.join(dirName, 'client', 'components'),
        constants: path.join(dirName, 'client', 'constants'),
        utils: path.join(dirName, 'client', 'utils'),
      },
    },

    stats: stats,

    target: 'node',
  };
};

module.exports = createServerConfig;
