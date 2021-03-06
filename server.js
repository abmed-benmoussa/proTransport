var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,

  bodyParser = require('body-parser');
  var timeout = require('connect-timeout')



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(timeout('1h'))

var clientRoutes = require('./api/routes/clientRoutes'); //importing route
var vehiculeRoutes = require('./api/routes/vehiculeRoutes'); //importing route
clientRoutes(app); //register the route
vehiculeRoutes(app); 





// start the server
const server = app.listen(port);

// increase the timeout to 4 minutes
server.timeout = 240000;  


console.log('todo list RESTful API server started on: ' + port);