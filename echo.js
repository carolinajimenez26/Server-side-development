var http = require('http');

http.createServer(function(request, response) {
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    response.writeHead(200, {'Content-type':'text/html'});
    response.write("<h1>The response is </h1>");
    request.pipe(response);
  } else {
      response.writeHead(404, {'Content-type':'text/html'});
      response.end('<h1>Error 404 '+ request.url +' not founded</h1>');
  }
}).listen(3000);
