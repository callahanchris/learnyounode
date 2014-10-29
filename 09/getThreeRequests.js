var http = require('http'),
    bl = require('bl'),
    urls = process.argv.slice(2),
    results = [],
    count = 0,
    i;

var printResults = function () {
  for (i = 0; i < urls.length; i += 1) {
    console.log(results[i])
  }
};

var getResponse = function (index) {
  http.get(urls[index], function (response) {
    response.pipe(bl(function (error, data) {
      if (error) {
        return console.error(error)
      }

      results[index] = data.toString();
      count += 1;

      if (count === 3) {
        printResults();
      }
    }));
  });
};

for (i = 0; i < urls.length; i += 1) {
  getResponse(i);
}
