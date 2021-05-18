const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPluign = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
require('dotenv').config()

const isDev = (process.env.ENV === 'development')
const entry = ['./src/frontend/index.js']

if(isDev) {
	entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true')
}

module.exports = {
	entry: entry,
	output: {
		path: path.resolve(__dirname, 'src/server/public'),
		filename: isDev ? 'assets/app.js' : 'assets/app-[chunkhash].js',
		publicPath: '/',
	},
	optimization: {
	    minimize: true,
	    minimizer: [new TerserPlugin()],
	    splitChunks: {
	    	chunks: 'async',
	    	cacheGroups: {
	    		vendors: {
	    			name: 'vendors',
	    			chunks: 'all',
	    			reuseExistingChunk: true,
	    			priority: 1,
	    			filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[contentHash].js',
	    			enforce: true,
	    			test(module, chunks) {
	    				const name = module.nameForCondition && module.nameForCondition()
	    				return chunk => chunk => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name)
	    			}
	    		}
	    	}
	    } 
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
		!isDev ? new CompressionWebpackPluign({
			test: /\.js$|\.css$/,
			filename: '[path][base].gz'
		}) :
			() => {},
		!isDev ? new WebpackManifestPlugin() :
			() => {},
		new MiniCssExtractPlugin({
			filename: isDev ? 'assets/app.css' : 'assets/app-[chunkhash].css'
		})
	]
}