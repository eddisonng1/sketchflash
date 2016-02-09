var express = require('express');
var app = express();
var mongodb = require('mongodb');
var db = require('./config/db');
var mongoose = require('mongoose');
require('./model/model.js');
mongoose.connect(db.url);


var Order = mongoose.model('Order');

app.use(express.static(__dirname + "/public"));

app.get('/mainfunction',function(req,res){
console.log("success");

	console.log("success");

        var newOrder = new Order(
        {
	customer : 'John',
	path : 'fake/path'
	});
        newOrder.save(function (err, newComment) {
        	console.log("success");
        });
});

app.listen(3000);
console.log("Server running on port 3000");