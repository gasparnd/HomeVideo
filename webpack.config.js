const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('dotenv').config(

)

const isDev = (process.env.ENV === 'development')
const entry = ['./src/frontend/index.js']

if(isDev) {
	entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true')
}

module.exports = {
	entry: entry,
	output: {
		path: path.resolve(__dirname, 'src/server/public'),
		filename: 'assets/app.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	mode: process.env.ENV,
	module: {
		rules: [
			{
				test: /\.js|jsx $/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html $/,
				use: [{
					loader: 'html-loader'
				}]
			},
			{
				test: /\.css|scss $/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.eot|svg|ttf|woff|png|jpg|webp$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000,
						outputPath: 'assets',
						name: '[name].[ext]'
					}
				},
			}
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [	
		isDev ? new webpack.HotModuleReplacementPlugin() :
			() => {},
		new MiniCssExtractPlugin({
			filename: 'assets/app.css'
		})
	]
}