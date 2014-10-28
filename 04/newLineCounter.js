var fs = require('fs'),
    fileName = process.argv[2];

fs.readFile(fileName, function (error, data) {
  var fileContents;
  if (!error) {
    fileContents = data.toString();
    console.log(fileContents.split(/\n/).length - 1);
  }
});
