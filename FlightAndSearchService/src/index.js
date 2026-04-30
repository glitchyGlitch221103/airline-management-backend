const express = require('express');
const serverConfig = require('./config/server-config')

const app = express();

app.get('/api/v1/flights' ,(req,res) => {
    res.status(200).json ({
        message : 'api is working correctly',
        success : true 
    })
})

app.listen(serverConfig.PORT, () => {
    console.log(`Server started on port ${serverConfig.PORT}`);
});
