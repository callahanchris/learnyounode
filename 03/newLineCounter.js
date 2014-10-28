var fs = require('fs'),
    fileName = process.argv[2];

var newLines = function (fileName) {
  var buffer = fs.readFileSync(fileName),
      fileContents = buffer.toString();

  console.log(fileContents.split(/\n/).length - 1);
};

newLines(fileName);
