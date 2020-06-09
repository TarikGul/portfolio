const express = require('express');

const Location = require('../../models/Location');
const validateLocationInput = require('../../validation/location');

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'This is a test route' }));

router.post('/location', (res, req) => {
    const { body } = req;
    const { errors, isValid } = validateLocationInput(body);

    if (!isValid) {
        return res.status(400).json(errors);
    };

    const coordinates = body.location;
    
    const newLocation = new Location({
        location: coordinates
    });

    newLocation.save()
        .then((location) => {
            res.json(location);
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = router;