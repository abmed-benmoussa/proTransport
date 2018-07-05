'use strict';
module.exports = function(app) {
 
  var client = require('../controllers/clientController');

  // todoList Routes
  app.route('/clients')
      .get(client.getAllClients)
      .post(client.postClient)

  app.route('/client/:id')
      .get(client.getClientById)
      .put(client.updateClient)
      .delete(client.deleteClient);
};



