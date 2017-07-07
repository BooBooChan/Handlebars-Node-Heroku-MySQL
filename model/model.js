//Model does MySQL queries on this JS, NOT server.js.
//To enter MySQL on command line, make sure you enter mysql "--user=root -p". Do not forget that -p!
//Make sure MAMP is active before you log into MySQL.
//Remember: You run a SQL file on MySQL by entering "source <file path>" while MySQL is operating.

var mysql = require('mysql');
var myCONNECTION = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'root',

	database: 'death_metal'
});//CANNOT connect to mySQL either on the terminal or on the workbench. Tried requiring mysql, importing msql, establishing a port. Ask what's going on.

myCONNECTION.connect(function(err){

})

//Modifications to SQL where necessary
myCONNECTION.query(function(err){
	if (err){
		console.error("error connecting:" + err.stack)
	};
	console.log("connected as id:" + myCONNECTION.threadId);

});//This only works when MySQL is running. 

//When you have your variable containing the right user input and API data, perform these SQL queries accordingly.
var ___ = require("../server.js");
myCONNECTION.query(function(err, res){
	if (err){
		throw err
	};
});


module.exports = /*insert variable containing model data here.*/; //This will be exported to server.js.