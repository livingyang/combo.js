// require combo src
var req = require.context("./src", true, /^\.\/.*\.coffee$/);
req.keys().forEach(function (m) {
  req(m);
});

// require user src
var req = require.context("../src", true, /^\.\/.*\.(js|coffee)$/);
req.keys().forEach(function (m) {
  req(m);
});
