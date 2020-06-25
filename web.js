const fs = require('fs');
const express = require('express');

const app = express();

// write nginx tmp
fs.writeFile('/tmp/app-initialized', 'Ready to launch nginx', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});

// listen on the nginx socket
//This is really frustrating
app.listen('/tmp/nginx.socket', function () {
    console.log("Listening ");
});

