const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: ['./src/frontend/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/app.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	mode: 'development',
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
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			filename: 'assets/app.css'
		})
	]
}