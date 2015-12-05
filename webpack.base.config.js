var webpack = require('webpack'),
    path = require('path'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    embedFileSize = 64000;

var config = {
  entry: ['./src/main'],

  output: {
    path: './dist',
    filename: 'main.min.js',
    publicPath: '/dist/'
  },

  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'
      },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader!ts-loader' },
      {test: /\.css$/, loader: extractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.svg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
      {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
      {test: /\.jpg/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
      {test: /\.gif/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=' + embedFileSize
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};

module.exports = config;
