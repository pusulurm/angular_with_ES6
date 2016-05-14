var express = require("express");
//var fs = require('fs');
//var bodyParser = require('body-parser');
var router = express.Router();
var fs = require("fs");
//var path = require("path");
app = express();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({"extended" :true}));
app.use(router);
//var rootpath = "./node_modules";
//app.use(express.static(rootpath));
app.use(express.static("./"));

function indexHTML(req, res) {

    var path = 'index.html';

    var index = fs.readFileSync(path, 'utf8');
    res.send(200, index);
}

app.get('/', indexHTML);

console.log("app started..!");

//app.listen(3001);

module.exports= app;