var net = require('net'),
    port = process.argv[2];
    server = net.createServer(function (socket) {
      socket.write(formattedDate() + '\n');
      socket.end();
    }).listen(port),
    formattedDate = function () {
      var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minutes = date.getMinutes();

      return year + '-' + month + '-' + day + ' ' +
             hour + ':' + minutes;
    };
