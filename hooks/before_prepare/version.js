#!/usr/bin/env node

var fs = require('fs');

module.exports = function(context) {
  var util = context.requireCordovaModule(
    'cordova-lib/src/cordova/util'
  );
  var parser = context.requireCordovaModule(
    'cordova-lib/src/configparser/ConfigParser'
  );
  var xml = util.projectConfig(util.isCordova());
  var cfg = new ConfigParser(xml);
  var version = cfg.version();

  fs.writeFileSync(
    context.opts.plugin.dir + '/www/compile-time/version.js',
    'module.exports.version = function() { return "' + version + '";};'
  );
};
