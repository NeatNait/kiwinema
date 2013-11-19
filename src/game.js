var user = require(["./user"]);
var player = require("./player");
var match = require("./match");



var Game = function() {



	this.users = [];
	this.matches = [];


	this.init = function() {
	
	};

	this.findMatch = function() {
		//TODO
	};

	this.registerPlayer = function(p) {
		//TODO check if user exists in mongo
		var actualUser = user.createUser(p);
		this.users.push(actualUser);
		console.log(this.users);
	};


	this.createMatch = function(name, user) {

		if(this.matches.length == 0){
			var myPlayer = player.createPlayer(name, user);
			var m = match.createMatch();
			m.addPlayer(myPlayer);
			m.findGame(myPlayer);
			this.matches.push(m);
		} else {
			for(var i = 0; i < this.matches.length; i++) {
				var myPlayer = player.createPlayer(name, user);
				if(this.matches[i].findGame(myPlayer) == true) {
					return;
				}
			}
			var m = match.createMatch();
			m.addPlayer(myPlayer);
			this.matches.push(m);
		}

		console.log(this.matches.length);
		
	};

	this.getUsers = function() {
		return this.users;
	};

	this.init();

};

module.exports.createGame = createGame;

function createGame () {
	return new Game();
}