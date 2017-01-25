var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var caroRouter = require('./caroRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));


/*Attaches the routers to the app*/
app.use('/caro',caroRouter);

app.use(express.static(__dirname+'/public'));

/*Starts the server*/
app.listen(port, hostname, function () {
  console.log('Server running at http://'+hostname+':'+port+'/');
});
