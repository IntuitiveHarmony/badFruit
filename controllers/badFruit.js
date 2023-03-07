const express = require('express');
// router is what we use in the controllers instead of app. Instead of just express(), it's express.Router(). This makes it easier to export all of the routes in the entire file easily.
const router = express.Router();
// This is saying that I want the value of the Musicians from the object that was export. This is our ES6 destructuring syntax. If I point it to a directory, it automatically assumes an index.js file
// const db = require('../models');
const { badFruit } = require('../models');



module.exports = router