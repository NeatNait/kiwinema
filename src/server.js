var express = require("express");
var app = express();
var game = require("./game");

var kiwinema = game.createGame();

app.use(express.bodyParser());

app.get('/createUser', function(req, res) {


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Content-type", "application/json");


	kiwinema.registerPlayer(req.query.username);
	kiwinema.createMatch(req.query.username, req.query.username);
	//res.location('../preparePlay.html');

	res.send(kiwinema);

	//checkUser(req.body.username);
});

app.get('/userList', function(req, res) {

});


app.get('/', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

	res.send(JSON.stringify({
	"questions":[{
		"id": "1",
		"image":"img/green_lantern.jpg",
		"correct": "Green Lanter",
		"answers":[
			{"name":"Green Lanter", "correct": "true"},
			{"name":"X-Men", "correct": "false"},
			{"name":"Inception", "correct": "false"},
			{"name":"Batman", "correct": "false"}
		] 
	},
	{
		"id": "2",
		"image": "img/pulp.jpg",
		"correct": "Pulp Fiction",
		"answers":[
			{"name":"Pulp Fiction", "correct":"true"},
			{"name":"Kill Bill", "correct":"false"},
			{"name":"Django", "correct":"false"},
			{"name":"From Dusk Till Dawn", "correct":"false"}
		] 
	},
	{
		"id": "3",
		"image": "img/gladiator.jpg",
		"correct": "Gladiator",
		"answers":[
			{"name":"Gladiator", "correct":"true"},
			{"name":"Braveheart", "correct":"false"},
			{"name":"The Patriot", "correct":"false"},
			{"name":"Matrix", "correct":"false"}
		]
	},
	{
		"id": "4",
		"image": "img/batman.jpg",
		"correct": "Gladiator",
		"answers":[
			{"name":"Batman", "correct":"true"},
			{"name":"Gladiator", "correct":"false"},
			{"name":"The Patriot", "correct":"false"},
			{"name":"Inception", "correct":"false"}
		]
	},
	{
		"id": "5",
		"image": "img/inception.jpg",
		"correct": "Gladiator",
		"answers":[
			{"name":"Inception", "correct":"true"},
			{"name":"Memento", "correct":"false"},
			{"name":"The Patriot", "correct":"false"},
			{"name":"Batman", "correct":"false"}
		]
	}


	]}
	));



});



app.listen(8081);




