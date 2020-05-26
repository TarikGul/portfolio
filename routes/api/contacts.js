const express = require('express');

const Contact = require('../../models/Contact');
const validateContactInput = require('../../validation/contact');

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'This is a test route' }));

router.post('/contact', (req, res) => {
    const { body } = req;
    const { errors, isValid } = validateContactInput(body);

    if (!isValid) {
        return res.status(400).json(errors)
    };

    const newContact = new Contact({
        title: body.title,
        message: body.message,
        email: body.email
    }) 

    newContact.save()
        .then((contact) => res.json(contact))
        .catch(err => res.json(err))
});