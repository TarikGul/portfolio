const twilio = require('twilio');
const express = require('express');
const sslRedirect = require('heroku-ssl-redirect');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const Location = require('../../models/Location');
const validateLocationInput = require('../../validation/location');


const router = express.Router();

if (process.env.NODE_ENV === 'production') {
    app.use(sslRedirect());
}

router.get('/test', (req, res) => res.json({ msg: 'this is a test route' }));

// Success webhook route for receiving messages,
// Responds with a success message to the receivers number
router.post('/message', (req, res) => {
    const twilioSignature = req.headers['x-twilio-signature'];
    const url = 'https://tarikgul.com';
    const { body } = req;

    // Authenticating the request when in production
    // Otherwise ngrok is used for secure TCP tunnelling
    // The terminal commands for development
    // -$ twilio login
    // -$ twilio phone-numbers:update "+1${twilioNumber}" --sms-url="http://localhost:5000/api/message"
    // -$ node message_server.js
    if (process.env.NODE_ENV === 'production') {
        const requestIsValid = twilio.validateRequest(
            process.env.TWILIO_AUTH_TOKEN,
            twilioSignature,
            url,
            body
        );

        if (!requestIsValid) {
            return res.status(401).send('Unauthorized');
        }

        res.set({
            'Content-Type': 'text/plain'
        });
    }

    const { errors, isValid } = validateLocationInput({ location: body.Body });
    const coordinates = body.Body;

    const newLocation = new Location({
        location: coordinates
    });
    // Send a response back to the origin phone number.
    const twiml = new MessagingResponse();

    if (!isValid) {
        twiml.message(`Your lat/long was formatted incorrectly, or there was an external error. Sorry`);
        return res.status(400).json(errors);
    } else {
        twiml.message(`Your lat/long was successfully received from ${body.From}, and being saved in the DB`);

        res.writeHead(200, { 'content-type': 'text/xml' });
        res.end(twiml.toString());

        newLocation.save()
            .then((location) => {
                console.log(location)
            })
            .catch(err => {
                console.log(err)
            });
    }    
});

module.exports = router;