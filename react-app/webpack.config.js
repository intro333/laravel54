var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/dist')
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: __dirname + '/src',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }]
      }
    ]
  }
};
