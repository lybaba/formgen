var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/App.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
    { test: /\.json$/, loader: "json" },
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    {
      test: /\.css$/,
      loader: 'style!css?modules!postcss'
    }
    ]
  },
  postcss: [
    require('autoprefixer')
    ],
  plugins: [
    new webpack.BannerPlugin("Copyright WonderForm inc."),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin()
    ],
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}
