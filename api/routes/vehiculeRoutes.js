'use strict';
module.exports = function(app) {
 
  var vehicule = require('../controllers/vehiculeController');

  // todoList Routes
  app.route('/vehicules')
      .get(vehicule.getAllVehicules)
      .post(vehicule.postVehicule)

  app.route('/vehicule/:id')
      .get(vehicule.getVehiculeById)
      .put(vehicule.updateVehicule)
      .delete(vehicule.deleteVehicule);
};



