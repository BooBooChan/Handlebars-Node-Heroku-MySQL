const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
//const methodOverride = require(method-override);
const port = 3000;
const app = express();
var controller = require('./controllers/controller.js');//Here we are calling and retrieving the exported variables from the required JS sheet, in this case, controller.js.
var myMODEL = require('./model/model.js');


//Now the middleware
	//Getting server data
app.get('/api/', function(req, res, next){
	res.___
next(); //next() will call back the next function below... doesn't the JS sheet do that automatically?
});

	//Posting server data
app.post('/api/', function(req, res, next){

});


//Export the servers' variables to their proper JS sheets.
module.exports = ___; //To model.js
module.exports = ___; //To controller.js

//Check
console.log("App is listening on port" + port);



//Test on console using nodemon.

