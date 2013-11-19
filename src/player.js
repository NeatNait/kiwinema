var Player = function(name, user) {

	this.id;
	this.name = name;
	this.user = user;
	this.answers = [];
	this.points = 0;
	this.devices = []; //XXX PERHAPS
	var init = function () {
	
	};


	this.addAnswer = function(question) {
		var ans = new Answer('{"question":'+question+'}');
		this.answers.push(ans);
	};

	this.getTotalAnswers = function() {
		return this.answers.length;
	};
	init();

};

module.exports.createPlayer = createPlayer;

function createPlayer (name, user) {
	return new Player(name, user);
}