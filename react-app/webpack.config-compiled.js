'use strict';

var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, '../public', 'react-public', 'customer', '[hash]')
    path: path.resolve(__dirname, '../public', 'react-public', 'customer')
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: __dirname + '/src'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "less-loader" // compiles Less to CSS
      }]
    }]
  }
};

//# sourceMappingURL=webpack.config-compiled.js.map