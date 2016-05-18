var express = require("express");
var router = express.Router();
var fs = require("fs");
app = express();
app.use(router);
app.use(express.static("./"));

function indexHTML(req, res) {
   
}

app.get('/', indexHTML);

console.log("app started..!");


module.exports= app;