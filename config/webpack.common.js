const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/index.js'),
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(svg|png|jpg|jpeg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[hash][ext][query]',
				},
			},
			{
				test: /\.(otf|ttf|woff|woff2|eof)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '',
						},
					},
					'css-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.m?js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'To Do App',
			template: './src/index.html',
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new DotEnv(),
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
		},
	},
};
