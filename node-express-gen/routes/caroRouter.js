var express = require('express');
var bodyParser = require('body-parser');

var caroRouter = express.Router();
caroRouter.use(bodyParser.json());

caroRouter.route('/')
  .all(function (req,res,next) {
    res.writeHead(200, {'Content-type':'text/plain'});
    next();
  })
  .get(function (req,res,next) {
    res.end("Hola Caro :)");
  })
  .post(function (req,res,next) {
    res.end("cambia el nombre a " + req.body.name + " con estas descripciones "
    + req.body.description);
  })
  .delete(function (req,res,next) {
    res.end("Elimina " + req.body.name);
  });

caroRouter.route('/:id')
  .all(function (req,res,next) {
    res.writeHead(200, {'Content-type':'text/plain'});
    next();
  })
  .get(function (req,res,next) {
    console.log("parametros : " + req.params);
    res.end("Caro#" + req.params.id);
  })
  .put(function (req,res,next) {
    res.write("Actualizando el nombre Caro#" + req.params.id);
    res.end("Actualiza con : " + req.body.name + "\n detalles: "
    + req.body.description);
  })
  .delete(function (req,res,next) {
    res.end("Elimina " + req.params.id);
  });

module.exports = caroRouter;
