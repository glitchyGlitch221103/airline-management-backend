// in this files ordering wont matter because we have exported the fns as properties inside the module.exports object in the routes file 
// for particular route we have mapped these functions.

const getAllFlights = (req, res) => {
    return res.status(200).json({
        data: [],
        message: 'Successfully fetched all flights'
    });
};

const getFlightById = (req, res) => {
    const flightId = req.params.id;
    return res.status(200).json({
        data: {},
        message: `Successfully fetched flight ${flightId}`
    });
};

const searchFlights = (req, res) => {
    const { from, to } = req.query;
    return res.status(200).json({
        data: {},
        message: `Searching flights from ${from} to ${to}`
    });
};

module.exports = {
    getAllFlights,
    getFlightById,
    searchFlights
};