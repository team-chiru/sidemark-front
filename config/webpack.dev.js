const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      enforce: 'pre',
      exclude: /(node_modules|config)/,
      use: 'eslint-loader',
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: '../build',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FlowBabelWebpackPlugin({
      warn: true,
      formatter: (errorCode, errorDetails) => {
        return `A Flow error was detected: ${errorCode} '\n\n' ${errorDetails}`
      },
    })
  ],
  performance: {
    hints: false,
  },
});
