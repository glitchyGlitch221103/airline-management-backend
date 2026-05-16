const Flight = require('../models/flights');
const AppError = require('../utils/app-error');

const getAllFlights = async (req, res, next) => {
    try {
        const flights = await Flight.findAll();
        return res.status(200).json({
            data: flights,
            message: 'Flights fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

const getFlightById = async (req, res, next) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (!flight) {
            return next(new AppError('Flight not found', 404));
        }
        return res.status(200).json({
            data: flight,
            message: 'Flight fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

const createFlight = async (req, res, next) => {
    try {
        const flight = await Flight.create(req.body);
        return res.status(201).json({
            data: flight,
            message: 'Flight created successfully'
        });
    } catch (error) {
        next(error);
    }
};

const updateFlight = async (req, res, next) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (!flight) {
            return next(new AppError('Flight not found', 404));
        }
        await flight.update(req.body);
        return res.status(200).json({
            data: flight,
            message: 'Flight updated successfully'
        });
    } catch (error) {
        next(error);
    }
};

const deleteFlight = async (req, res, next) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (!flight) {
            return next(new AppError('Flight not found', 404));
        }
        await flight.destroy();
        return res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (error) {
        next(error);
    }
};

const searchFlights = async (req, res, next) => {
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
        next(error);
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