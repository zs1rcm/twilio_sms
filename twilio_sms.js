//Twilio SMS nodejs console command
//zs1rcm / gmail com


if(process.argv.length <= 2){
    console.log('Usage: twilio_sms.js <to_number> <message>');
    process.exit();
}


let to_number = process.argv[2];
let message_body = process.argv[3];


let account_sid = 'accountsid'; //get from  twilio.com/console
let auth_token = 'authtoken'; //get from twilio.com/console
let number = '+xxxxxxxxxx'; //twilio number

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const client = require('twilio')(account_sid, auth_token);

client.messages
  .create({
     body: message_body,
     from: number,
     to: to_number
   })
  .then(message => console.log(message.sid));
