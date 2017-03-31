const join = require('path').join

module.exports = {
  entry: './example/scripts.js',
  output: {
    path: join(__dirname, 'example')
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'}
    ]
  }
}
