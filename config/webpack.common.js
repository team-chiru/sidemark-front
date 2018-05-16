const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

require("babel-polyfill");

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [{
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader', {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }],
      }),
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
    }, {
      test: /\.css$/,
      use: 'css-loader',
    }, {
      test: /\.(js|jsx)?$/,
      exclude: /(node_modules|config)/,
      use: 'babel-loader',
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: 'file-loader',
    }, {
      test: /\.svg$/,
      use: 'svg-react-loader',
    }, {
      test: /\.(yml|yaml|md)$/,
      use: 'raw-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      ['~']: path.resolve(__dirname, '../src'),
      ['memo']: path.resolve(__dirname, '../memo'),
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'npm_package_name',
      'npm_package_version',
    ]),
    new DotenvPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(['../build']),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      disable: process.env.NODE_ENV === 'development',
    }),
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
};
