const express = require('express');
const Route = express.Router()

const {getGirls} = require('../controller/girls');

Route.get('/getdetail', getGirls)

module.exports = Route;