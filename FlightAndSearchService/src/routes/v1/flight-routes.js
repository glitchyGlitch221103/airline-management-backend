const express = require('express');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

// Middleware — validates search params before controller runs

const validateSearchParams = (req, res, next) => {
    const { from, to } = req.query;
    if (!from || !to) {
        return res.status(400).json({
            message: 'from and to query parameters are required'
        });
    }
    next();  // CRITICAL -> without this request wont move forward it will hang here 
};

router.get('/search', validateSearchParams, FlightController.searchFlights);
router.get('/:id', FlightController.getFlightById);
router.get('/', FlightController.getAllFlights);

module.exports = router;