const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: `./index.js`,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
      }
    ]
  },
  devtool: 'source-map',
  performance: {
    hints: 'error'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '200.html',
      template: `./index.html`
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin(`styles.[chunkhash:6].css`)
  ]
};