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

var app = new Framework7({ 
				// App root element
				 root: '#app', // App Name 
				 name: 'My App', // App id 
				 id: 'com.myapp.test', // Enable swipe panel 
				 panel: { swipe: 'left', }, // Add default routes 
				 routes: [ { path: '/about/', url: 'about.html', }, ], // ... other parameters 
				 });
				 

	
	var $$ = Dom7;



document.getElementById("show2").style.display = "none";
document.getElementById("show3").style.display = "none";
document.getElementById("finalButton").style.display = "none";

$$('.convert-form-to-data').on('click', function(){
  var formData = app.form.convertToData('#my-form');
  var answer1 = formData.name;

  window.localStorage.setItem('ans1', answer1);
  //console.log(answer1);
 
  document.getElementById("show1").style.display = "none";

  alert(JSON.stringify(formData));

  document.getElementById("show2").style.display = "block";

  $$('.convert-form-to-data2').on('click', function(){
    var formData = app.form.convertToData('#my-form');
    var answer2 = formData.name;

    window.localStorage.setItem('ans2', answer2);

    document.getElementById("show1").style.display = "none";
    document.getElementById("show2").style.display = "none";

    alert(JSON.stringify(formData));

    document.getElementById("show3").style.display = "block";

    $$('.convert-form-to-data3').on('click', function(){
      var formData = app.form.convertToData('#my-form');
      var answer3 = formData.name;

      window.localStorage.setItem('ans3', answer3);

      document.getElementById("show1").style.display = "none";
      document.getElementById("show2").style.display = "none";
      document.getElementById("show3").style.display = "none";

      alert(JSON.stringify(formData));

      document.getElementById("finalButton").style.display = "block";


  });

  });

  

});
var ans1 = window.localStorage.getItem('ans1');
var ans2 = window.localStorage.getItem('ans2');
var ans3 = window.localStorage.getItem('ans3');

if (ans1,ans2,ans3 == "yes") {
  alert("You are doing well!");
}else{
  alert("You need to see the Doctor");
}


	




