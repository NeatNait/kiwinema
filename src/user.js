var User = function(nick) {

	this.uid;
	this.nick = nick;

	var init = function () {
	
	};

	init();

};


module.exports.createUser = createUser;

function createUser (nick) {
	return new User(nick);
}