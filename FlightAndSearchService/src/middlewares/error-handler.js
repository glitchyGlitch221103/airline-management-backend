const { UniqueConstraintError, ValidationError } = require('sequelize');
const AppError = require('../utils/app-error');

const errorHandler = (err, req, res, next) => {

    // If it's our own AppError, use its status code and message directly
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }

    // Sequelize duplicate entry
    if (err instanceof UniqueConstraintError) {
        return res.status(409).json({
            message: 'A record with this value already exists'
        });
    }

    // Sequelize validation failure
    if (err instanceof ValidationError) {
        return res.status(400).json({
            message: 'Invalid data provided'
        });
    }

    // Unknown/unexpected error — log it, send generic message
    console.error(err);
    return res.status(500).json({
        message: 'Internal server error'
    });
};

module.exports = errorHandler;