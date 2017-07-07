const express = require('express');
const model = require('./model.js');

//Now we request information from express
//Starting with the routes
	//Web navigation
app.get('/', function(req, res){
	//How do we want to respond to the user? I'm guessing we want to minimize html files.
	res.
});
app.get('/bandlookup', function(req, res){

});
app.get('/albumsbesttoworst', function(req, res){

});
app.get('/instrumentechnique', function(req, res){

});
app.get('/radiofriendly', function(req, res){

});
app.get('/oldestcurrentbands', function(req, res){

});
	//API
app.get('/api/', function(req, res){
	res.___//I need to figure out how to feature databases which allow user to look up the band. What method would do that? res.send? res.body? What does res.body even do? Why doesn't express' own npm manual and links have any reference to it? Furthermore, why don't they have the object contents listed on the site? Why do I have to google an amateur's website just to look up what I can do with requests and responses on any npm package?
});
app.post('/api/', function(req, res){

});



//This is where we will have GET and POST commands to query and add data. Test on Postman.
//This is also where we will route API and HTML. Use express.static().
//Make sure to export router to server.js.