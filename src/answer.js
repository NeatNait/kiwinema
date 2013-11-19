var Answer = function(opts) {

	this.question = opts.question;
	this.selectedAnswer;
	this.timeStart = opts.question.shown || new Date();
	this.timeEnd = new Date();
	this.timeDiff = this.timeStart - this.timeEnd;
	this.points;

	var init = function () {
		
	};

	init();

};