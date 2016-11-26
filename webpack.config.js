var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool:"cheap-module-eval-source-map",
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    library: 'shared'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname,'/')],
        exclude: [path.resolve(__dirname,'/node_modules/')],
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ,'postcss-loader'],
        include: __dirname
      }
    ]
  },
  plugins: [
	    new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
    ]
}