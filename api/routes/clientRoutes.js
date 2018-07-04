'use strict';
module.exports = function(app) {
 
  var client = require('../controllers/clientController');

  // todoList Routes
  app.route('/clients')
    .get(client.getAllClients)
};



