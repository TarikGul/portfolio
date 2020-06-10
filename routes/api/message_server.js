const http = require('http');

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
    const twiml = new MessagingResponse();
    
    const { body } = req;
    console.log(body)
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
            twiml.message(`Your lat/long was successfully received from ${body.From}, and saved in the DB`);
            console.log('No more data in response.');
        });
    });

    internalRequest.on('error', (e) => {
        twiml.message(`There was an errors in saving the lat/long in the database: ${e.message}`);
        console.error(`problem with request: ${e.message}`);
    });

    // Write data to request body
    internalRequest.write(postData);
    internalRequest.end();
    // if (err) {
    //     twiml.message(`There was an errors in saving the lat/long in the database: ${err}`);
    //     console.log(err)
    // } else {
    //     twiml.message(`Your lat/long was successfully received from ${body.From}, and saved in the DB`);
    //     console.log(res)
    // }
 
    res.writeHead(200, { 'content-type': 'text/xml' });
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log('Express Messaging Server listening on port 1337');
});