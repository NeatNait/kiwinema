var Question = function(opts) {

	this.id;
	this.img;
	this.correct;
	this.answers = [];
	this.shown;

	var init = function () {
		setCorrect();
	};


	var setCorrect = function(){

		for (var i = this.answer.length - 1; i >= 0; i--) {
			if(this.answer[i].correct)
				this.correct = this.answers[i];
		};

	};



	init();

};