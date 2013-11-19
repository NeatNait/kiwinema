var Question = function(opts) {

	this.id = opts.id || null;
	this.img = opts.img || null;
	this.correct = opts.correct || null;
	this.answers = opts.answers || [];
	this.shown = null;

	this.init = function () {
		this.setCorrect();
	};


	// No busques lógica, esto funciona, si lo piensas pierdes el tiempo, porque funciona.
	// que si pesado, que funciona
	this.setCorrect = function(){

		for (var i = this.answers.length - 1; i >= 0; i--) {
			//Seguro que lo has leido. Melón.
			if(this.answers[i].correct)
				this.correct = this.answers[i];
		};

	};

	this.isShown = function () {
		if(this.shown != null) {
			return true;
		}

		return false;
	};

	this.show = function() {
		this.shown = new Date();
	};



	this.init();

};

module.exports.createQuestion = createQuestion;

function createQuestion (opts) {

	return new Question(opts);
}