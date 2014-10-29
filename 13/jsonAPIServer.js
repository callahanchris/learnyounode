var http = require('http'),
    url = require('url'),
    port = process.argv[2],
    parsetime = function (date) {
        return {
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds()
        };
      
    },
    unixtime = function (date) {
      return {
        unixtime: date.getTime()
      }
    },
    server = http.createServer(function (request, response) {
      var parsedUrl = url.parse(request.url, true),
          date = new Date(parsedUrl.query.iso),
          result;

      if (parsedUrl.pathname === '/api/parsetime') {
        result = parsetime(date);
      } else if (parsedUrl.pathname === '/api/unixtime') {
        result = unixtime(date);
      }

      if (result) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(result));
      } else {
        response.writeHead(404);
        response.end();
      }

    }).listen(port);
