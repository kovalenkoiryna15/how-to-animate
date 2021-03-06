const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '';

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    entry: ['./src/script.js', './src/styles.scss'],
    target: 'web',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/dist'),
      publicPath: ASSET_PATH,
    },
    resolve: {
      descriptionFiles: ['package.json'],
      modules: ['node_modules'],
      alias: {
        '~assets': path.resolve(__dirname, './src/assets'),
        '~audio': path.resolve(__dirname, './src/assets/audio'),
        '~images': path.resolve(__dirname, './src/assets/images'),
        '~constants': path.resolve(__dirname, './src/constants'),
        '~utils': path.resolve(__dirname, './src/utils'),
      },
      extensions: ['.js'],
    },
    devServer: {
      contentBase: path.join(__dirname, '/dist'),
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.((j|t)(s|sx))$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
          ],
        },
        {
          test: /\.(mp3|wav)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/audio/',
              },
            },
          ],
        },
        {
          test: /\.(?:jpe?g|svg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/',
              },
            },
          ],
        },
        {
          test: /\.(ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/favicon/favicon.ico',
        filename: 'index.html',
        title: 'How to animate',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
  };
  return config;
};
