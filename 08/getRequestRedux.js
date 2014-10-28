var http = require('http'),
    bl = require('bl'),
    url = process.argv[2];

http.get(url, function (response) {
  response.pipe(bl(function (error, data) {
    if (error) {
      return console.error(error);
    }

    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
