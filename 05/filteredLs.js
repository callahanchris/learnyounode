var fs = require('fs'),
    dir = process.argv[2];
    extension = process.argv[3];

fs.readdir(dir, function (error, list) {
  var i;

  if (!error) {
    for (i = 0; i < list.length; i += 1) {
      if (list[i].match('.' + extension)) {
        console.log(list[i]);
      }
    }
  }
});