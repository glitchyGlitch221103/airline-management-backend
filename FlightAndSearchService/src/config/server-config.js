const dotenv = require('dotenv'); // importing the dotenv packages 

dotenv.config(); // activating the dotenv package and dotenv reads the env file and loads data in process.env

module.exports = {
    PORT: process.env.PORT,  //exporting the port's value from process env -> config file and rest of the app
    SERVICE_NAME : process.env.SERVICE_NAME, //exporting service name from .process env 
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_DIALECT: process.env.DB_DIALECT
}

//  we are configuring our server using .env  dotenv and process.env 
//  process.env  -> it holds the key-value pair from the .env file 
//  .env -> file that has key-value pairs which is written outside the code in the env we are running the code
//  dotenv -> node.js package for reading env file 

