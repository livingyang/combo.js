var path = require('path');

module.exports = {
	entry: './entry.js',
	output: {
      filename: '../lib/app.js'
  },
	module: {
		loaders: [
			{ test: /\.coffee$/, loader: "coffee" }
		]
	},
	devtool: "#inline-source-map",
	resolve: {
		extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
	}
}
