var Match = function() {


	this.players = [];
	this.myPlayer;
	this.winner;

	this.questions = [];
	this.actualQuestion;
	
	this.dateBegin = new Date();
	this.dateEnd;
	this.dateDiff;

	this.finished = false;

	var init = function() {
	
	};

	this.findWinner = function() {
		this.winner = this.players[0];
		for (var i = this.players.length - 1; i >= 0; i--) {
			if(this.players[i].points > this.winner.point)
				this.winner = players[i];
		};
	};

	this.start = function() {
		this.dateBegin = new Date();
	};

	this.end = function() {
		this.dateEnd = new Date();
		this.dateDiff = this.dateEnd - this.dateBegin;
	};

	this.nextQuestion = function() {
		for (var i = this.questions.length - 1; i >= 0; i--) {
			if(this.questions[i].shown !== undefined) {

				this.questions[i].shown = new Date();

				this.actualQuestion = this.questions[i];

				return this.actualQuestion;
			}
		};
	};

	this.clickAnswer = function() {

		this.myPlayer.addAnswer(this.actualQuestion.shown);

		this.nextQuestion();

	};

	//server method
	this.findGame = function (p) {
		if(this.players.length < 2) {
			if(this.players.indexOf(p) == -1){
				this.addPlayer(p);
				return true;	
			}

			return false;
			
		}else {
			return false;
		}
	};

	this.addPlayer = function(p) {
		this.players.push(p);
	};



	this.obtainQuestions = function() {
		//todo

		//this.questions = mongo.getQuestions();
	};

	this.isFinished = function() {
		if (this.finished == false) {
			this.getFinished();
		}

		return this.finished;
	};

	this.getFinished = function() {
		for(var i = 0; i < this.players.length; i++) {
			if(this.players[i].getTotalAnswers() != this.questions.length){
				this.finished = false;
				return false;
			}
		}

		this.finished = true;
		return true;
	};

	init();

};

module.exports.createMatch = createMatch;

function createMatch () {
	return new Match();
}