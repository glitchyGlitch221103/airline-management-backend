class AppError extends Error {
    constructor(message, statusCode) {
        super(message);          // sets this.message
        this.statusCode = statusCode;
        this.isOperational = true;  // marks this as a known, expected error
    }
}

module.exports = AppError;