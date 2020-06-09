const http = require('http');
const axios = require('axios');

const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Success webhook route for receiving messages,
// Responds with a success message to the receivers number
app.post('/message', (req, res) => {
    const twiml = new MessagingResponse();
    
    const { body } = req;
    axios.post('/locations/location', body.Body)
        .then((res) => {
            twiml.message(`Your lat/long was successfully received from ${body.From}, and saved in the DB`);
            console.log('success', res);
        })
        .catch((err) => {
            twiml.message(`There was an errors in saving the lat/long in the database: ${err}`);
        });
    
    
    res.writeHead(200, { 'content-type': 'text/xml' });
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log('Express Server listening on port 1337');
});