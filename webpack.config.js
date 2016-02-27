module.exports = {
  entry: [
    '../client/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081'
  ],
  output: {
    path: __dirname,
    publicPath: 'http://localhost:8081/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
