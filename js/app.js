var app = new Framework7({ 
				// App root element
				 root: '#app', // App Name 
				 name: 'My App', // App id 
				 id: 'com.myapp.test', // Enable swipe panel 
				 panel: { swipe: 'left', }, // Add default routes 
				 routes: [ { path: '/about/', url: 'about.html', }, ], // ... other parameters 
				 });
				 

	
	var $$ = Dom7;


$$('.open-vertical').on('click', function () {
  app.dialog.prompt('What is your name?', function (name) {
  app.dialog.confirm('Are you feeling good today?', function () {
    app.dialog.confirm('Are you free from Headache?', function () {
	    app.dialog.confirm('Are you normal?', function () {
		    app.dialog.alert('You are dong well ' + name + '!');
	    }); 
	});
     });
  });
});

$$('.open-vertical2').on('click', function () {
  app.dialog.create({
    title: 'Vertical Buttons',
    text: 'Dialog with vertical buttons',
    buttons: [
      {
        text: 'Button 1' :  function () {
	      app.dialog.alert("You are doing well!");
      }
      },
      {
        text: 'Button 2',
      },
      {
        text: 'Button 3',
      },
    ],
    verticalButtons: true,
  }).open();
});
