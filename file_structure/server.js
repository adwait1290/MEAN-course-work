var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// ENV VARIABLE CALLED APPROOT TO KEEP TRACK OF ROOT FOLDER OF APP
process.env['APPROOT'] = __dirname;

require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));


require(path.join(process.eng['APPROOT'], 'server/config/routes.js'))(app);


app.listen(8000, function() {

	console.log('llistening on port 8000');
})