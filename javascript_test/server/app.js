var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var jsonfile = require('jsonfile');
var path = require('path');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/log', function (req, res) {
    res.send('Hello World');
});
app.post('/log', function (req, res, next) {
    console.log(req.body);
    var filePath = path.join(__dirname, "../public/collectErrorMessage/log.json");
    jsonfile.writeFile(filePath, req.body, {spaces: 2}, function(err){
        if(err) {
            console.error(err);
            res.send("error");
        } else {
            res.send("success");
        }
    });
});

app.listen(8899);