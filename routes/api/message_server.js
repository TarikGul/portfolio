const http = require('http');

const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// Used for saving the users location
const Location = require('../../models/Location');
const validateLocationInput = require('../../validation/location');

const app = express();

// Success webhook route for receiving messages,
// Responds with a success message to the receivers number
app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    const { body } = req;
    const { errors, isValid } = validateLocationInput(body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    const newLocation = new Location({
        location: body.body
    });

    newLocation.save()
        .then((location) => {
            res.json(location);
            twiml.message('Your lat/long was successfully saved in the database');

            res.writeHead(200, { 'content-type': 'text/xml' });
            res.end(twiml.toString());
        })
        .catch((err) => {
            res.json(err)

            twiml.message('Your request was unsuccesful');

            res.writeHead(400, { 'content-type': 'text/xml' });
            res.end(twiml.toString());
        })
});

http.createServer(app).listen(1337, () => {
    console.log('Express Server listening on port 1337');
});