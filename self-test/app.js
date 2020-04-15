var app = new Framework7();

var $$ = Dom7;

// Vertical Buttons
$$('.open-vertical').on('click', function () {
  app.dialog.create({
    title: 'Are You Normal?',
    buttons: [
      {
        text: 'Yes',
      },
      {
        text: 'No',
      },
    ],
    verticalButtons: true,
  }).open();
});