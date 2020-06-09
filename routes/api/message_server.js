const http = require('http');

const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

// Success webhook route for receiving messages,
// Responds with a success message to the receivers number
app.post('/message', (req, res) => {
    const twiml = new MessagingResponse();
    console.log(req)
    twiml.message(`Your ${req} lat/long was successfully received, attempting to save in the DB`);
    
    res.writeHead(200, { 'content-type': 'text/xml' });
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log('Express Server listening on port 1337');
});