var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/typeahead.jsx",
  output: {
    path: path.resolve(__dirname), 
    filename: "frontend/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}