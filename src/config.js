var path = require('path');

var comboRoot = path.join(__dirname, '..');
var projectRoot = process.cwd();

module.exports = {
	entry: path.join(comboRoot, 'src', 'entry.js'),
	output: {
      filename: path.join(projectRoot, 'Temp', 'app.js'),
  },
	module: {
		loaders: [
			{ test: /\.coffee$/, loader: "coffee" }
		]
	},
  resolveLoader: {
    root: path.join(comboRoot, 'node_modules')
  },
	resolve: {
    fallback: projectRoot,
		extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
	}
}
