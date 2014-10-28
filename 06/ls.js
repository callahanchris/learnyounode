var filter = require('./filterModule'),
    dir = process.argv[2],
    extension = process.argv[3];

filter(dir, extension, function (error, data) {
  if (error) {
    console.log(error);
  }
  
  data.forEach(function (file) {
    console.log(file);
  });
});