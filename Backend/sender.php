<?php

require 'app.php';
$data = new App();
$result = $data->fetch_nos();

$fetch = file_get_contents("https://corona.lmao.ninja/v2/all");
$response = json_decode($fetch, true);

$totalCase = $response["cases"];
$totalDeath = $response["deaths"];
// ---
$todayCase = $response["todayCases"];
$todayDeath = $response["todayDeaths"];
$recovered = $response["recovered"];
$composedMessage = "Today Case: $todayCase \n 
					Today Deaths: $todayDeath \n
					------ \n
					Total Cases: $totalCase \n
					Total Deaths: $totalDeath \n
					Total Recovered: $recovered";


require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

if ($result) {

// Your Account SID and Auth Token from twilio.com/console
$account_sid = '';
$auth_token = '';
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
        'body' => $composedMessage
    )
);

}

		if ($message->account_sid) {
			echo "Message Sent";
		}

}	


 ?>