var app = new Framework7({ 
				// App root element
				 root: '#app', // App Name 
				 name: 'My App', // App id 
				 id: 'com.myapp.test', // Enable swipe panel 
				 panel: { swipe: 'left', }, // Add default routes 
				 routes: [ { path: '/about/', url: 'about.html', }, ], // ... other parameters 
				 });
				 
// Init Swiper
// var swiper = app.swiper.create('.swiper-container', { speed: 400, spaceBetween: 100 });

// Main Scripts
// Get worldwide report function 
//  const api_url = 'https://corona.lmao.ninja/all';
//       async function getWorldReport() {
//         const response = await fetch(api_url);
//         const data = await response.json();
//         const {cases, recovered,deaths, todayCases} = data;
        
//         var worldTemp = `
//     						Total Case - <b>${cases}</b>
//                                         <br> Total Death - <b>${deaths}</b>
//                                         <br> Recovered - <b>${recovered}</b>
//                                         <hr> Case Today - <b>${todayCases}</b>
//     						`;	document.querySelector("#global-report").innerHTML = worldTemp;
     
//      }
     
// // Auto init function
// (function (){
// 				app.dialog.preloader("Getting Latest Reports");
				
// 			/*	if(navigator.onLine == false){
// 								app.dialog.close();
// 								app.dialog.alert("No Internet Connection", "Error");
// 							}
// 				*/
// // Get user location and grab reports related to the result

// var url = "http://ip-api.com/json";
// var result = fetch(url)
// .then(function(response){
// 		 return response.json();
//    })
// .then(function(data) {
// 		  var state = data.regionName;
//     	var country = data.country;
//     	var countryCode = data.countryCode;
//     	// Converts Country Code To The Country Flag Emoji 🚩
//     	var countryFlag = countryCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397) );
//     	document.getElementById("country"). innerHTML = "Cases In " + country + " " + countryFlag;
//  // grab data from second api to get covid results
//     	return fetch(`https://corona.lmao.ninja/countries/${country}`);
// 		})
// 		.then(function(response) {
// 				  return response.json();
// 				})
// 		.catch(function(error) {
// 						console.log('Request failed', error) })
// 		 result.then(function(r){
// 		 		console.table(r);
// 		 		var totCase = r.cases;
//     		var totDeath = r.deaths;
//     		var recov = r.recovered;
//     		var todCase = r.todayCases;
//     		// creating an html template from our result
//     						var countryTemp = `
//     						Total Case - <b>${totCase}</b>
//                                         <br> Total Death - <b>${totDeath}</b>
//                                         <br> Recovered - <b>${recov}</b>
//                                         <hr> Case Today - <b>${todCase}</b>
//     						`;	document.querySelector("#country-report").innerHTML = countryTemp;
//     		getWorldReport()
//     	// close loading dialog
//     	app.dialog.close();
// 		 		 });
// 	}());


//trying out the self test
var $$ = Dom7;


$$('.open-vertical').on('click', function () {
  app.dialog.confirm('Are you feeling good today?', function () {
    app.dialog.confirm('Are you free from Headache?', function () {
	    app.dialog.confirm('Are you normal?', function () {
		    app.dialog.alert('You are dong well');
	    }); 
	});
  });
});

$$('.open-vertical').on('click', function () {
  app.dialog.prompt('What is your name?', function (name) {
    app.dialog.confirm('Are you sure that your name is ' + name + '?', function () {
      app.dialog.alert('Ok, your name is ' + name);
    });
  });
});
