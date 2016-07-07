var pathUtil = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

var DIR = {
	SRC: pathUtil.resolve(__dirname, 'src'),
	BUILD: pathUtil.resolve(__dirname, 'build'),
	DIST: pathUtil.resolve(__dirname, 'dist')
};

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	title: "React app",
  filename: 'index.html',
	template: pathUtil.resolve(DIR.SRC, 'index.html'),
});

var WebpackConfig = {
	entry: DIR.SRC + '/index.jsx',
	output: {
		path: DIR.BUILD,
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015','react']
				}
			},
			{
	      test: /\.css$/,
	      loader: 'style!css?sourceMap!postcss'
	    },
			{
        test: /\.(scss|sass)$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
		]
	},
	postcss: function () {
    return [
			precss,
			autoprefixer({
				browsers: ['last 4 versions','last 4 Android versions','last 4 ChromeAndroid versions','last 4 FirefoxAndroid versions'],
				remove: false
			})];
  },
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		HtmlWebpackPluginConfig
	],
	devtool: 'source-map',
	devServer: {
    contentBase: __dirname + '/dist',
    hot: true
  }
};

module.exports = WebpackConfig;
