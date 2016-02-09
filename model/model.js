var mongoose = require('mongoose');

// Comment Schema for comments under comic strips
var orderSchema = new mongoose.Schema({
	customer: {type: String, default: "works"},
	path: {type: String, default: "works"}, // id can be used to fetch user data
	customeremail: {type: String, default: "works"},
},{collection: "orderCollection"});


//declare models
mongoose.model("Order", orderSchema);






