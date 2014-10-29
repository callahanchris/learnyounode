var http = require('http'),
    fs = require('fs'),
    map = require('through2-map'),
    port = process.argv[2],
    server = http.createServer(function (request, response) {
      if (request.method !== 'POST') {
        return response.end('only for POST requests!');
      }
      
      request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
      })).pipe(response);

    }).listen(port);
