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
 		// console.log('Country :' + country);
    	return fetch('https://corona.lmao.ninja/v2/countries/' + country);
	})
	.then(function(response) {
		return response.json();
	})
	.catch(function(error) {
		app.dialog.alert('Request failed ' + error);
	})
	result.then(function(r){
		 // console.log(JSON.stringify(r));
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
             <hr> Case Today - <b>${todCase}</b> <span style="margin-left: 120px"><i class="f7-icons small">arrow_right</i></span>
    		`;
    	document.querySelector("#country-report").innerHTML = countryTemp;
    	// close loading dialog
    	app.dialog.close();
	});
}

// Self test script
var $$ = Dom7;


//Declaring all variables
var pos = 0, test, test_status, question, choice, choices, chA, chB, correct = 0, yes = 0, no = 0;

//multidimentional array
    var questions = [
      [ "Do you have cough ?", "Yes", "No", "A", "B" ],
      [ "Do you have cold ?", "Yes", "No", "A", "B" ],
      [ "Do you have Diarrhea ?", "Yes", "No", "A", "B" ],
      [ "Do you have Sore Throat ?", "Yes", "No", "A", "B" ],
      [ "Do you have body aches ?", "Yes", "No", "A", "B" ],
      [ "Do you have Headache ?", "Yes", "No", "A", "B" ],
      [ "Do you have Fever(37.8C and above) ?", "Yes", "No", "A", "B" ],
      [ "Are you having difficulty breathing ?", "Yes", "No", "A", "B" ],
      [ "Are you experiencing fatigue ?", "Yes", "No", "A", "B" ],
      [ "Have you travelled in the past 1 month ?", "Yes", "No", "A", "B" ],
      [ "Do you have a travel history to a Covid-19 infected area ?", "Yes", "No", "A", "B" ],
      [ "Have you had direct contact with or are you taking care of a positive Covid-19 patient ?", "Yes", "No", "A", "B" ]
    ];

    function _(x){
      return document.getElementById(x);
    }

//Function to Render Questions 
    function renderQuestion () {
      test = _("test");

      if (pos >= questions.length) {
        
        if (yes == 12) {
          app.dialog.alert("Please visit any Testing Center for Proper Testing and Properly Quarantine Or isolate from people.");
        }else{
          if (no == 12) {
            app.dialog.alert("You are Okay, Just visit the Pharmacist for Medical Counsel");
          }else{
            if (yes <= 11) {
              app.dialog.alert("Please visit an health Practictional for Medial check up and Feel free to go for Covid-19 Test");
            }
          }
        }

        //Display this when it finishes looping through the questions array
        test.innerHTML = "<button class='col button button-large button-fill' onclick='location.reload()'>Repeat</button>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0
        yes = 0;
        no = 0;
        return false;
      }
	
    //Markup to display questions
      _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
      question = questions[pos] [0];
      chA = questions[pos] [1];
      chB = questions[pos] [2];

      test.innerHTML = "<h3>"+question+"</h3>";
      test.innerHTML += 
      `
      <div class="list">
      <ul>
    <li>
      <label class="item-radio item-radio-icon-start item-content">
        <input type="radio" name="choices" value="A" checked  />
        <i class="icon icon-radio"></i>
        <div class="item-inner">
          <div class="item-title">${chA}</div>
        </div>
      </label>
    </li>
  </ul>
</div>
      `;
      test.innerHTML += 
       `
      <div class="list">
      <ul>
    <li>
      <label class="item-radio item-radio-icon-start item-content">
        <input type="radio" name="choices" value="B"  />
        <i class="icon icon-radio"></i>
        <div class="item-inner">
          <div class="item-title">${chB}</div>
        </div>
      </label>
    </li>
  </ul>
</div><br>
      `;
      test.innerHTML += "<button class='col button button-large button-fill' onclick='checkAnswer()'>Submit Answer</button>";

    }
//Function that checkes question and answers to determine the self test report
    function checkAnswer(){
      choices = document.getElementsByName("choices");
      for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
          choice = choices[i].value;
        }
      }

      if (choice == questions[pos][3]) {
        yes++;
      }else{
        if (choice == questions[pos][4]) {
          no++;
        }
      }
      pos++;
      renderQuestion();
    }

    

    window.addEventListener("load", renderQuestion, false);



	

