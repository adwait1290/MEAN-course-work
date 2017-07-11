 var mongoose = require('mongoose');


 var Schema = mongoose.Schema;

 var CustomerSchema = new mongoose.Schema({

 	name: {type: String, required: true}
 }, {timestamps: true})

 mongoose.model('Customer', CustomerSchema);