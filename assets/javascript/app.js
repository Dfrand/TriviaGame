

// $.ajax({
//   url: "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple",
//   method: "GET" 

// }).done(function(response) {
//   console.log(this);


// $(".content").html('<p>' + response);
// console.log(this.content);

// });

$('#start').on('click', function() {
    game.start();
})


var questions = [{
    question: "What land mammal other than man has the longest lifespan?",
    answers: ["Cow", "Elephant", "Rat", "Dolphin"],
    correctAnswer: "Elephant"
}, {
    question: "How do bees communicate with each other?",
    answers: ["Flying", "Jumping", "Dancing", "Sleeping"],
    correctAnswer: "Dancing"
}, {
    question: "The longest beetle in the world is how long?",
    answers: ["6 inches", "8 inches", "12 inches", "3 inches"],
    correctAnswer: "6 inches"
}, {
    question: "An earthworm has how many hearts?",
    answers: ["1", "8", "3", "5"],
    correctAnswer: "5"
}, {
    question: "What type of animal is the symbol of medicine?",
    answers: ["Snake", "Deer", "Bear", "Eagle"],
    correctAnswer: "Snake"
}, {
    question: "What kind of animal mates only once for 12 hours and can sleep for three years?",
    answers: ["Lizard", "Lion", "Snail", "Sloth"],
    correctAnswer: "Snail"
}, {
    question: "Which sense is the weakest sense in most primates?",
    answers: ["Smell", "Sound", "Touch", "Taste"],
    correctAnswer: "Smell"
}, {
    question: "What is the name for a collection of frogs?",
    answers: ["Bunch", "Flock", "Army", "Pack"],
    correctAnswer: "Army"
}, {
    question: "A female donkey is called a what?",
    answers: ["Jerk", "Ass", "Bertha", "Jenny"],
    correctAnswer: "Jenny"
}, {
    question: "What is the only venomous snake found in Britain?",
    answers: ["King Cobra", "Rattlesnake", "Adder", "Black Mamba"],
    correctAnswer: "Adder"
}, {
    question: "What type of leaves does a Koala use for food?",
    answers: ["Palm", "Eucalyptus", "Bamboo", "Fig"],
    correctAnswer: "Eucalyptus"
}, {
    question: "Lupus is the Latin name for what animal?",
    answers: ["Wolf", "Alligator", "Cat", "Moose"],
    correctAnswer: "Wolf"

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is Up!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $('#wrapper').prepend('<h2>Time Remaining: <span id="counter">90</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#wrapper').append('<h2>' + questions[i].question + '</h2>')
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#wrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    },
    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function() {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function() {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function() {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"), function() {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-10']:checked"), function() {
            if ($(this).val() == questions[10].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-11']:checked"), function() {
            if ($(this).val() == questions[11].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function() {
        clearInterval(timer);
        $('#wrapper h2').remove();
        $('#wrapper').html("<h2>All done!</h2>");
        $('#wrapper').append("<h3>Correct Answer: " + this.correct + "</h3>")
        $('#wrapper').append("<h3>Incorrect Answer: " + this.incorrect + "</h3>")
        $('#wrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }

};