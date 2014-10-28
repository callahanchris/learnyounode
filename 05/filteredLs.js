var fs = require('fs'),
    path = require('path');
    dir = process.argv[2];
    extension = process.argv[3];

fs.readdir(dir, function (error, list) {
  var i;

  if (!error) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + extension) {
        console.log(file);
      }
    });
  }
});