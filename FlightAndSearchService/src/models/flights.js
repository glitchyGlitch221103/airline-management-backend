const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Flight = sequelize.define('Flight', {
    flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    departureAirport: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    arrivalAirport: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'flights',
    timestamps: true,   // adds createdAt and updatedAt columns automatically
});

module.exports = Flight;