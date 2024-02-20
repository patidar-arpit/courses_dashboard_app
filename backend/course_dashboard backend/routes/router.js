const express = require('express');
var router = express.Router();
var connection = require("../db/dbconnect")


router.get('/courses', function (req, res) {

    connection.query('SELECT * FROM course', function (err, data, fields) {
        if (err){
            console.log(err);
            res.status(500).send("<h3> no data found</h3>")
        }
        else{
            res.send(data);
        }
    })

    

})

router.get("/course/:id",function(req,res){
   
    connection.query('SELECT * FROM course WHERE id = ?',[req.params.id], function (err, data, fields) {
        if (err){
            console.log(err);
            res.status(500).send("<h3> no data found</h3>")
        }
        else{
            res.send(data[0]);
        }
    })
})

router.post("/course", function (req, res) {

    connection.query('INSERT INTO course values(?,?,?,?)', [req.body.id, req.body.title, req.body.description,req.body.price], function (err, data, fields) {
        if (err){
            console.log(err);
            res.status(500).send("<h3> no data found</h3>")
        }
        else{
            res.status(200).send("<h3> Employee Added</h3>")
        }
    })
})


router.delete("/course/:id", function(req, res){

    connection.query('DELETE FROM course WHERE id =?', [req.params.id], function (err, data, fields) {
        if (err){
            console.log(err);
            res.status(500).send("<h3> deletion failed</h3>")
        }
        else{
            res.status(200).send("<h3> Employee Deleted</h3>")
        }
    })
})


router.put("/course/:id",function(req,res){
    
    connection.query('UPDATE course SET title =?,description =?,price =? WHERE id =?', [req.body.title, req.body.description,req.body.price,req.params.id], function (err, data, fields) {
        if (err){
            console.log(err);
            res.status(500).send("<h3> Employee Details Not Updated </h3>")
        }
        else{
            res.status(200).send("<h3> Employee Updated</h3>")
        }
    })
    
})



module.exports = router;