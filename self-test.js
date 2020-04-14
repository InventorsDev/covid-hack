//asking questions
var questions = [
    'Whats\'s your name?',
    'Where\'s are you from?',
    'What\'s your age?',
    'Do you have Cough?',
    'Do you have Diarrhea?',
    'Do you have Sore Throat?',
    'Do you have Body aches?',
    'Do you have Headache?',
    'Do you have Fever(37.8C and above)?',
    'Do you have Difficulty Breathing?',
    'Do you have Fatigue?',
    'Have you travelled in a Month (Oversea)?',
    'Have you come in contact with a Covid-19 positie patient ?',
    'Contact: 080097000010 OR covid19.ncdc.gov.ng ',
    'It was nice talking to you :) ',
];

// a counter that changes the questions we set to 0(beginning)
var num = 0;
//targeting where the questions will be asked
var output = document.querySelector('#question');
output.innerHTML = questions[0];
//so whatever response is given by the user lets save it somewhere so bot can respond
var inputBox = document.querySelector("input");
function showResponse() {
    //whatever the person enters into the form store it in a variable
    input = inputBox.value;
    //if the user doesnt fill anything dnt allow enter key to work
    if (inputBox.value == "") {
        alert('please answer the question');
    }
}
//on pressing the enter key
$(document).on('keypress', function(e){
    if (e.which == 13) {
        showResponse();
    }

})
