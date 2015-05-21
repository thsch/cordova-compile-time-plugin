#!/usr/bin/env node

var fs = require('fs');

module.exports = function(context) {
  var env = / --release ?/.test(context.cmdLine) ? 'production' : 'development';

  fs.writeFileSync(
    context.opts.plugin.dir + '/www/compile-time/env.js',
    'module.exports.env=\'' + env + '\''
  );
};
