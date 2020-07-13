const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Inventory = require('../../models/Inventory');
const keys = require('../../config/keys');

router.get('/test', (req, res) => res.json({ msg: 'This is a test' }));

router.get('/index', (req, res) => {
    if(req.authKey === keys.trailAuth) {
        console.log('hit this route')
        console.log(mongoose);
        console.log(Inventory)
        Inventory.find()
            .then((files) => {
                console.log(files)
                res.json(files)
            })
            .catch((err) => res.status(404).json({ notasksfound: 'No trails found', err }));
    } else {
        res.send('Good Try')
    }
})

module.exports = router;
