
process.env.NODE_DEBUG = 'fs';

var db = require('../../dbconnection'); //reference of dbconnection.js  

//var db = require('../../dbconnection'); //reference of dbconnection.js  
var client = {  
    getAllClients: function(req,res) {  
        db.query('Select * from ajt_client', function (error, results, fields) {
            if (error) throw error;
            res.json({"status": 200, "error": null, "response": results});
        });
    }
};  
module.exports = client;  