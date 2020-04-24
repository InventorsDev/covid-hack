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
sessionStorage.clear();
// a counter that changes the questions we set to 0(beginning)
var num = 0;
//targeting where the questions will be asked
var output = document.querySelector('#question');
output.innerHTML = questions[0];
//so whatever response is given by the user lets save it somewhere so bot can respond
var inputBox = document.querySelector('input');
function showResponse() {
    //if the user doesnt fill anything dnt allow enter key to work
    if (inputBox.value == "") {
        alert('please answer the question');
    }else{
        // a counter that changes the next question 
        num= num+1;
        //whatever the person enters into the form store it in a sessionStorage
        sessionStorage.setItem(num,inputBox.value);
        //reload the page if the last queation is ask
        if (num==14) {
            window.location.assign('self-test.html');
        }
        // load the next question to the page
        output.innerHTML = questions[num];
        document.querySelector("input").value="";
        if (num==13) {
            var num2 = 0;
            for (var i = 2; i < 14; i++) {
                if (sessionStorage.getItem(i)=='yes') {
                    num2= num2+1;
                }
            }
            if (num2>7) {
                output.innerHTML = 'There is high tendency of you having Covid-19.</br> please '+questions[13];
            }else{
                output.innerHTML = 'You do not  have Covid-19.</br> please '+questions[13]+' for more Information';
            }
        }
   }
}
//on pressing the enter key
$(document).on('keypress', function(e){
    if (e.which == 13) {
        showResponse();
    }

})
