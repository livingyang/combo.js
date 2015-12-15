require('lodash');

var req = require.context("Assets/", true, /^\.\/.*\.(js|coffee)$/);
_.forEach(req.keys(), function (m) {
  req(m);
});
