const express = require('express');

const Location = require('../../models/Location');
const validateLocationInput = require('../../validation/location');

router.get('/test', (req, res) => res.json({ msg: 'This is a test route' }));