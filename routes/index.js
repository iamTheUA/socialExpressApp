const express  = require('express');
const route = express.Router();
const home = require('../controllers/homeController')
console.log("in router");

route.get('/',home)

module.exports= route;

