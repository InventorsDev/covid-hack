# `COVID-19 REPORT 🌍`

## About

Globally, you'll need an internet connection to get latest report about the covid-19 pandemic, hence countries with no steady access to Internet connection has no means of getting steady updates.
<br>
We are breaching this gap integrating Twilio API to help people get latest info needed about the pandemic without having to be online.

### How it works
You'll only need to access the  web app once [here](https://inventorsdev.github.io), after which you'll get a pop-up asking for your mobile number.
And that's it, you'll be updated with covid report everyday.
(This process is automated using Cron job).
<br>
Optionally, visiting the web app will help you get reported cases in your country + global cases only, so as not to bore you with big statistics data's.
<br>
The app also supports performing self test right on your device

## Features

- Get daily report via SMS.
- Get only reports that concerns you.
- Perform self test right in your mobile phone
- Easily accessible user interface.

## How to use it
Simply visit https://inventorsdev.github.io/covid-hack

## Set up

### Requirements

- PHP
- SQL Database
- A Twilio account - [sign up](https://www.twilio.com/try-twilio)

### Twilio Account Settings

| Config&nbsp;Value | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account&nbsp;Sid  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).                                                         |
| Auth&nbsp;Token   | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).                                                         |
| Phone&nbsp;number | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming) |

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone git@github.com:inventorsdev/covid-hack.git
cd covid-hack
```
2. Fix Twilio credentials in `sender.php`
3. Import `Db.sql` on your MySQL Database 
3. Run the `index.html` file on localhost

## Technologies Used
- HTML
- CSS
- JAVASCRIPT
- [Framework 7](http://framework7.io)
- PHP - For Backend Services

## Screenshots

## Contributing

This project is open source and welcomes contributions. All contributions are subject to our [Code of Conduct](https://github.com/inventorsdev/covid-hack/blob/master/CONTRIBUTING.md).

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)
