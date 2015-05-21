#!/usr/bin/env node

var fs = require('fs');

module.exports = function(context) {
  var util = context.requireCordovaModule(
    'cordova-lib/src/cordova/util'
  );
  var ConfigParser = context.requireCordovaModule(
    'cordova-lib/src/configparser/ConfigParser'
  );
  var xml = new ConfigParser(util.projectConfig(util.isCordova()));
  var config = {
    id: xml.packageName(),
    version: xml.version(),
    name: xml.name(),
    description: xml.description(),
    author: xml.author(),
  };

  fs.writeFileSync(
    context.opts.plugin.dir + '/www/compile-time/config.js',
    'module.exports=' + JSON.stringify(config)
  );
};
