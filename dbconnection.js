var mysql = require('mysql');  
var connection = mysql.createPool({  
    host: '127.0.0.1',  
    user: 'root',  
    password: 'Bilog@2017',  
    database: 'pt'  
});  
module.exports = connection;