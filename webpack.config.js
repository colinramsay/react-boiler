var webpack = require('webpack'),
    path = require('path'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    embedFileSize = 64000;

var config = {
  entry: ['./js/index'],
  devtool: 'source-map',

  output: {
    path: './dist',
    filename: 'index.min.js',
    publicPath: '/dist/'
  },

  resolve: {
    modulesDirectories: ['node_modules', './js'],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loader: extractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.svg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
      {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
      {test: /\.jpg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
      {test: /\.gif/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=' + embedFileSize
      }
    ]
  }
};

module.exports = config;
