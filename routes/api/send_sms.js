const { 
    twilioAccountSid, 
    twilioAuthToken,
    twilioPhoneNumber,
    personalPhone 
} = require('../../config/keys');
const client = require('twilio')(twilioAccountSid, twilioAuthToken);

client.messages
    .create({
        body: 'You have successfully updated your location',
        from: twilioPhoneNumber,
        // For now put personal number, but we will change to the receivers number on success
        to: personalPhone
    })
    .then(message => console.log(message.sid));
