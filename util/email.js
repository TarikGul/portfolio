const nodemailer = require('nodemailer');
const keys = require('./config/keys');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tarikportfolio37@gmail.com',
        pass: keys.emailAddressKey
    }
});

// const mailOptions = {
//     from: 'tarikportfolio37@gmail.com',
//     to: 'tariksnow37@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

module.exports = transporter;

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });