const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('@nextcloud/webpack-vue-config')

const config = {
	entry: {
		submit: path.resolve(path.join('src', 'submit.js')),
	},
}

module.exports = merge(config, webpackConfig)
