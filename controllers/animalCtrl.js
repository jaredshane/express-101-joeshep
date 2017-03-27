'use strict';

const { join } = require('path')
const chickData = require('../models/chicken')

const chickenNames = chickData.map( (chicken) => chicken.name)

module.exports.newPage = (req, res, err) => res.sendFile(join(__dirname, '../public', `${req.url}.html`))

module.exports.submit = (req, res, err) => {
  console.log(`Submitting form for a ${req.url}`)
  res.send(`404 no chickens found. They are all gone and were served ${chickenNames.join(' and ')}`)
}
