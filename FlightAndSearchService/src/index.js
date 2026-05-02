const express = require('express');  // import the express module 
const { PORT, SERVICE_NAME } = require('./config/server-config'); //import the port and service from config/server-config
const apiRouter = require('./routes/v1'); //import the route which was exported from ./routes/v1.

// export -> router was made available to be used by other other files using // module.export //

const app = express(); // starts the express app

app.use(express.json()); // parse the data sent by user in the request in json format , basically reading the json data.
app.use('/api/v1', apiRouter); // any request that is starting with * /api/v1 * should be mount / connect to  * apiRouter *

app.listen(PORT, () => {
    console.log(`${SERVICE_NAME} started on port ${PORT}`);
});