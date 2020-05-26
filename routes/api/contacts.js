const express = require('express');

const Contact = require('../../models/Contact');

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'This is a test route' }));