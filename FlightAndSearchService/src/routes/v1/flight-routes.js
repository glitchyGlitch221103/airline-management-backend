const express = require('express');

const router = express.Router();

// Static route to search flights using query parameters (from, to)
router.get('/search', (req, res) =>  {  
    return res.status(200).json({
        data: {},
        message: `GET /flights/search — from: ${req.query.from}, to: ${req.query.to}`
    });
});

// Dynamic route to fetch a specific flight by id (':id' is a route parameter)
router.get('/:id', (req, res) => {
    return res.status(200).json({
        data: {},
        message: `GET /flights/${req.params.id}`
    });
});

// Static route to fetch all flights
router.get('/', (req, res) => { 
    return res.status(200).json({
        data: {},
        message: 'GET all flights'
    });
});

module.exports = router;

// Important note:
// '/search' is defined before '/:id' because Express matches routes in order.
// If '/:id' comes first, a request to '/search' would be treated as id = 'search',
// which would lead to incorrect behavior.