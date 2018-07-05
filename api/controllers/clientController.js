
process.env.NODE_DEBUG = 'fs';

var db = require('../../dbconnection'); //reference of dbconnection.js  

//var db = require('../../dbconnection'); //reference of dbconnection.js  
var client = {  
    getAllClients: function(req,res) {  
        db.query('Select * from ajt_client', function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    },
    postClient: function(req,res) {  
        var postData  = req.body;
        console.log(postData);
        db.query('INSERT INTO ajt_client SET ?', postData, function (error, results, fields) {
           if (error) throw error;
           res.end(JSON.stringify(results));
         });
    },
    getClientById: function(req,res) {  
        db.query('Select * from ajt_client where id=?', [req.params.id], function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    },
    updateClient: function(req,res) {  
        var postData  = req.body;
        console.log(postData);
        db.query('update ajt_client SET `nom`=? where id=?', [postData.nom,postData.id], function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    },
    deleteClient: function(req,res) {  
        db.query('delete from ajt_client WHERE `id`=?', [req.body.id], function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    }
};  


module.exports = client;  