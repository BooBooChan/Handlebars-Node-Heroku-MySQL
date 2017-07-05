const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
//const methodOverride = require(method-override);
const port = 3000;
const app = express();
var controller = require('./controllers/controller.js');//Here we are calling and retrieving the exported variables from the required JS sheet, in this case, controller.js.

//Now we request information from express
//Starting with the routes
	//Web navigation
app.get('/', function(req, res){
	//How do we want to respond to the user? I'm guessing we want to minimize html files.
});
app.get('', function(req, res){

});
app.get('', function(req, res){

});
	//API
app.get('', function(req, res){

});


//Now the middleware
	//Getting server data
app.get('', function(req, res, next){

next(); //next() will call back the next function below... doesn't the JS sheet do that automatically?
});

	//Posting server data
app.post('', function(req, res, next){

});


var mysql = require('mysql');
mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'root',

	database: 'death_metal'
});//CANNOT connect to mySQL either on the terminal or on the workbench. Tried requiring mysql, importing msql, establishing a port. Ask what's going on.

connection.query(function(err){
	if (err) throw err;

});//This only works when MySQL is functioning. 

module.exports = app;//Hmmm... so then to whence are we exporting app?
//Check
console.log("App is listening on port" + port);



//Test on console using nodemon.

