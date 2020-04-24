   var app = new Framework7({ 
		// App root element
		root: '#app', // App Name 
		name: 'My App', // App id 
		id: 'com.myapp.test', // Enable swipe panel 
		panel: { swipe: 'left', }, // Add default routes 
		routes: [ { path: '/about/', url: 'about.html', }, ], // ... other parameters 
	});
				 
// Init Swiper
var swiper = app.swiper.create('.swiper-container', { speed: 400, spaceBetween: 100 });


// Get worldwide report function
const api_url = 'https://corona.lmao.ninja/v2/all';
async function getWorldReport() {
	const response = await fetch(api_url);
	const data = await response.json();
	const {cases, recovered,deaths, todayCases} = data;
	var worldTemp = `Total Case - <b>${cases}</b>
                 <br> Total Death - <b>${deaths}</b>
              	 <br> Recovered - <b>${recovered}</b>
                 <hr> Case Today - <b>${todayCases}</b>
    			`;
	document.querySelector("#global-report").innerHTML = worldTemp;
     
}
     
// Detect user state and show report based on the location
function getStateReport(){

	app.dialog.preloader("Detecting Location 🎈");			
	var url = "https://ipinfo.io/json";
	var result = fetch(url)
	
	.then(function(response){
		 return response.json();
  	 })
	.then(function(data) {
		// close loading dialog
		app.dialog.close();
		var state = data.city;
    	var country = data.country;
    	var countryCode = data.country;
    	// Converts Country Code To The Country Flag Emoji 🚩
    	var countryFlag = countryCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397) );
    	document.getElementById("country").textContent = "Cases In " + country + " " + countryFlag;
 		// grab data from second api to get covid results
 		// app.dialog.preloader("Generating Reports ⚕️")
 		console.log('Country :' + country);
    	return fetch('https://corona.lmao.ninja/v2/countries/' + country);
	})
	.then(function(response) {
		return response.json();
	})
	.catch(function(error) {
		app.dialog.alert('Request failed ' + error);
	})
	result.then(function(r){
		 console.log(JSON.stringify(r));
		 app.dialog.preloader("Getting Latest Reports");
		 var totCase = r.cases;
    	 var totDeath = r.deaths;
    	 var recov = r.recovered;
    	 var todCase = r.todayCases;
    	 // creating an html template from our result
    	 var countryTemp = `
    		 Total Case - <b>${totCase}</b>
             <br> Total Death - <b>${totDeath}</b>
             <br> Recovered - <b>${recov}</b>
             <hr> Case Today - <b>${todCase}</b>
    		`;
    	document.querySelector("#country-report").innerHTML = countryTemp;
    	// close loading dialog
    	app.dialog.close();
	});
}

// Self test script
var $$ = Dom7;




$$('.convert-form-to-data').on('click', function(){
  var formData = app.form.convertToData('#my-form');
  console.log(JSON.stringify(formData));
  var gender = formData.gender
  alert(gender);
});


	

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})

function startGame() {
	startButton.classList.add('hide')
	shuffledQuestions = questions
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
}

function setNextQuestion() {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	})
}

function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide')
	} else {
    checkAnswer();
  //   alert("You are Doing Well!");
		startButton.innerText = 'Restart Self Test'
		startButton.classList.remove('hide')

	}
}

function checkAnswer(){
  let question1 = questions[0].answers;
  console.log(question1);
  alert("This thing is not doing Well");
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}

const questions = [
	{
    id:1,
		question: 'Do you have malaria?',
		answers: [
			{ text: 'Yes', correct: true },
			{ text: 'No', wrong: false }
		]
	},
	{
    id:2,
		question: 'Do you have Typhoid?',
		answers: [
			{ text: 'Yes', correct: true },
			{ text: 'No', correct: false }
		]
	},
	{
		question: 'Do you have High-Blood Pressure?',
		answers: [
			{ text: 'Yes', correct: true },
			{ text: 'No', correct: false }
		]
	},
	{
		question: 'Do you have problem?',
		answers: [
			{ text: 'Yes', correct: true },
			{ text: 'No', correct: false }
		]
	}
]

console.log(questions[0].question);
// function checkAnswer(){
//   let question1 = questions[0].answers;
//   console.log(questions[0]);
// }
