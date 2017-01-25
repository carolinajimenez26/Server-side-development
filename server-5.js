var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/caro', function (req,res,next) {
  res.writeHead(200, {'Content-type':'text/plain'});
  next();
});

app.get('/caro', function (req,res,next) {
  res.end("Hola Caro :)");
});

app.get('/caro/:id', function (req,res,next) {
  console.log("parametros : " + req.params);
  res.end("Caro#" + req.params.id);
});

app.put('/caro/:id', function (req,res,next) {
  res.write("Actualizando el nombre Caro#" + req.params.id);
  res.end("Actualiza con : " + req.body.name + "\n detalles: "
  + req.body.description);
});

app.post('/caro', function (req,res,next) {
  res.end("cambia el nombre a " + req.body.name + " con estas descripciones "
  + req.body.description);
});

app.delete('/caro', function (req,res,next) {
  res.end("Elimina " + req.body.name);
});

app.delete('/caro/:id', function (req,res,next) {
  res.end("Elimina " + req.params.id);
});

app.use(express.static(__dirname+'/public'));

/*Starts the server*/
app.listen(port, hostname, function () {
  console.log('Server running at http://'+hostname+':'+port+'/');
});
