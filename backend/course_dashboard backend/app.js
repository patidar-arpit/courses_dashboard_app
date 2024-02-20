const express = require('express');

const app = express();

const bodyParser = require('body-parser');

var routes = require('./routes/router');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(9090, function () {
    console.log('Example app listening on port 3000!');
});


module.exports = app;