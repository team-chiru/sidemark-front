const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const NamedModulesPlugin = webpack.NamedModulesPlugin
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRootPlugin = require('html-webpack-react-root-plugin')

const PostCSSImportPlugin = require('postcss-import')
const PostCSSNextPlugin = require('postcss-cssnext')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ReactRootPlugin('app'),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: ['standard-loader']
    },
    {
      test: /\.(ng|svg|jpg|gif)$/,
      use: ['file-loader']
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { 'modules': false }],
            'react',
            'stage-1'
          ],
          plugins: [
            ['babel-plugin-transform-decorators-legacy'],
            ['transform-class-properties'],
            ['lodash', { 'id': ['lodash', 'semantic-ui-react'] }]
          ]
        }
      }
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              new PostCSSImportPlugin(),
              new PostCSSNextPlugin()
            ]
          }
        }
      ]
    }]
  }
}
