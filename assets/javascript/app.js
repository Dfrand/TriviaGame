// alert('me');
// console.log("Me2");


    // $.ajax({
    //   url: "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple",
    //   method: "GET" 

    // }).done(function(response) {
    //   console.log(this);
    

    // $(".content").html('<p>' + response);
    // console.log(this.content);

    // });

$('#start').on('click',function(){
	game.start();
})


var questions = [{
	question:"How thick does ice have to be to drive a car on it?",
	answers:["3 inches","8 inches","2 feet","4 feet"],
	correctAnswer:"8 inches"
}, {
	question:"How thick does ice have to be to drive a car on it?",
	answers:["3 inches","8 inches","2 feet","4 feet"],
	correctAnswer:"8 inches"
}, {	
	question:"How thick does ice have to be to drive a car on it?",
	answers:["3 inches","8 inches","2 feet","4 feet"],
	correctAnswer:"8 inches"
}, {
	question:"How thick does ice have to be to drive a car on it?",
	answers:["3 inches","8 inches","2 feet","4 feet"],
	correctAnswer:"8 inches"
}, {
	question:"How thick does ice have to be to drive a car on it?",
	answers:["3 inches","8 inches","2 feet","4 feet"],
	correctAnswer:"8 inches"
}, {
	question:"How thick does ice have to be to drive a car on it?",
	answers:["3 inches","8 inches","2 feet","4 feet"],
	correctAnswer:"8 inches"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 10,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("Time is Up!");
			game.done();
		}	
	},
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
	$('#start').remove();
		for(var i = 0;i<questions.length;i++){
			$('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
			for (var j = 0; j < questions[i].answers.length;j++){
				$('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
			}
		}
	},
	done: function(){
		$.each($("input[name='question-0]':checked"),function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-1]':checked"),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-2]':checked"),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-3]':checked"),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-4]':checked"),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-5]':checked"),function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},

	result: function(){
		clearInterval(timer);
		$('#subwrapper h2').remove();

		$('#subwrapper').html("<h2>All done!</h2>");
		$('#subwrapper').append("<h3>Correct Answer: "+this.correct+"</h3>")
		$('#subwrapper').append("<h3>Incorrect Answer: "+this.incorrect+"</h3>")
		$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
	
};

 



















