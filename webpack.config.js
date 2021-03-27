const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
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
						limit: 5000,
						outputPath: 'asset',
						name: '[name].[ext]'
					}
				},
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].css'
		})
	]
}