var fs = require('fs'),
    path = require('path');

var filter = function (dir, extension, callback) {
  var matchingFiles = [];

  fs.readdir(dir, function (error, list) {
    if (error) {
      return callback(error);
    }

    list.forEach(function (file) {
      if (path.extname(file) === '.' + extension) {
        matchingFiles.push(file);
      }
    });

    callback(null, matchingFiles);
  });
};

module.exports = filter;