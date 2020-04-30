<?php

require 'app.php';
$data = new App();
$result = $data->fetch_nos();



require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

if ($result) {

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'ACe5438c1efe112aa35c23ad6b8b5a392d';
$auth_token = '10f661f817038c158c3291e01fd1969a';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+12183944990";

$client = new Client($account_sid, $auth_token);

//to loop through data in the database
foreach ($result as $row) {

//message to be sent
$message = $client->messages->create(
    // Where to send a text message (your cell phone?)
    $row['phone_no'],
    array(
        'from' => $twilio_number,
        'body' => `
        	<h1>This is the message to be sent</h1>
        `
    )
);

}

		if ($message->account_sid) {
			echo "Message Sent";
		}

}	


 ?>

<!-- this is the form i created to test it out, just ignore -->

<form method="post">	

no: <br>	
<input type="text" name="mobile_no"><br>	<br>	

msg: <br>	
<textarea type="text" name="msg"></textarea><br>	<br>	

<input type="submit" name="" value="Send">

</form>
