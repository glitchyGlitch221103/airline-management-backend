const express = require('express'); //importing express module 
const flightRouter = require('./flight-routes'); // importing router which was exported from *flight-routes*

const router = express.Router(); // express.router() is an express function which creates a mini version of my express app

router.use('/flights', flightRouter); // any request that is having /flights in it should use route/connect/mount to flightRouter

module.exports = router; // this line will make *router* available to use outside this file. 