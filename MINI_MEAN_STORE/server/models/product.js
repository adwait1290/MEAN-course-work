var mongoose = require('mongoose');

var Schema = mongoose.Schema

 var ProductSchema = new mongoose.Schema({
 	name: {type: String, require: true},
 	description: {type: String, required: true},
 	quantity: {type: Number, required: true}
 }, {timestamps: true})

 mongoose.model('Product', ProductSchema)