const Flight = require('../models/flights');

const getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.findAll();
        return res.status(200).json({
            data: flights,
            message: 'Flights fetched successfully'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

const getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        return res.status(200).json({
            data: flight,
            message: 'Flight fetched successfully'
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const createFlight = async (req, res) => {
    try {
        const flight = await Flight.create(req.body);
        return res.status(201).json({
            data: flight,
            message: 'Flight created successfully'
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const updateFlight = async (req, res) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        await flight.update(req.body);
        return res.status(200).json({
            data: flight,
            message: 'Flight updated successfully'
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        await flight.destroy();
        return res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const searchFlights = async (req, res) => {
    try {
        const { from, to } = req.query;
        const flights = await Flight.findAll({
            where: {
                departureAirport: from,
                arrivalAirport: to
            }
        });
        return res.status(200).json({
            data: flights,
            message: 'Flights fetched successfully'
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = {
    getAllFlights,
    getFlightById,
    createFlight,
    updateFlight,
    deleteFlight,
    searchFlights
};