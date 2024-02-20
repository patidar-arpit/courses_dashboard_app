const mysql = require('mysql');
var mysqConnection  = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'wpt'

});

mysqConnection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('conneced to the db');
    }
})

module.exports = mysqConnection;