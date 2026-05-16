const express = require('express');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

const validateSearchParams = (req, res, next) => {
    const { from, to } = req.query;
    if (!from || !to) {
        return res.status(400).json({
            message: 'from and to query parameters are required'
        });
    }
    next();
}; //middleware -> to validate the parameters 

router.get('/search', validateSearchParams, FlightController.searchFlights);
router.get('/:id', FlightController.getFlightById);
router.get('/', FlightController.getAllFlights);
router.post('/', FlightController.createFlight);
router.put('/:id', FlightController.updateFlight);
router.delete('/:id', FlightController.deleteFlight);

module.exports = router;