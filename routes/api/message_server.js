const http = require('http');
const twilio = require('twilio');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const querystring = require('querystring');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Success webhook route for receiving messages,
// Responds with a success message to the receivers number
app.post('/message', (req, res) => {
    const twilioSignature = req.headers['x-twilio-signature'];
    const url = 'https://tarikgul.com';
    const { body } = req;

    // Authenticating the request when in production;
    // Otherwise ngrok is used for secure TCP tunnelling
    // The terminal command is after you do 
    // -$ twilio login
    // -$ twilio phone-numbers:update "+1${twilioNumber}" --sms-url="http://localhost:1337/message"
    if(process.env.NODE_ENV === 'production') {
        const requestIsValid = twilio.validateRequest(
            process.env.TWILIO_AUTH_TOKEN,
            twilioSignature,
            url,
            params
        );
    
        if (!requestIsValid) {
            return res.status(401).send('Unauthorized');
        }

        res.set({
            'Content-Type': 'text/plain'
        });
    }

    const twiml = new MessagingResponse();
    
    const postData = querystring.stringify({
        location: body.Body
    });

    let host = (process.env.NODE_ENV === 'production') ? 'www.tarikgul.com' : 'localhost';

    const options = {
        hostname: host,
        port: 5000,
        path: '/api/locations/location',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const internalRequest = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });

    internalRequest.on('error', (e) => {
        console.error(`problem with request: ${e.message}`); 
    });

    // Write data to request body
    internalRequest.write(postData);
    internalRequest.end();

    twiml.message(`Your lat/long was successfully received from ${body.From}, and being saved in the DB`);

    res.writeHead(200, { 'content-type': 'text/xml' });
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log('Express Messaging Server listening on port 1337');
});