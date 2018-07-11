
process.env.NODE_DEBUG = 'fs';

var db = require('../../dbconnection'); //reference of dbconnection.js  

var Vehicule = {  
    getAllVehicules: function(req,res) {  
        db.query('Select * from ajt_vehicle', function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    },
    postVehicule: function(req,res) {  
        var postData  = req.body;

        db.query('INSERT INTO ajt_vehicle SET ?', postData, function (error, results, fields) {
           if (error) throw error;
           res.end(JSON.stringify(results));
         });
    },
    getVehiculeById: function(req,res) {  
        db.query('Select * from ajt_vehicle where id=?', [req.params.id], function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    },
    updateVehicule: function(req,res) {  
        var postData  = req.body;
        db.query('update ajt_vehicle SET `nom`=? where id=?', [postData.nom,postData.id], function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    },
    deleteVehicule: function(req,res) {  
        db.query('delete from ajt_vehicle WHERE `id`=?', [req.body.id], function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    }
};  


module.exports = Vehicule;  