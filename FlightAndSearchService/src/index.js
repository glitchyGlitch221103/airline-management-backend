const express = require('express');
const serverConfig = require('./config/server-config')

const app = express();

// first api 
app.get('/api/v1/flights' ,(req,res) => {
    res.status(200).json ({
        message : 'api is working correctly',
        success : true 
    })
})
//third api  --> third api was written before 2nd because in the request url it will consider "search" as id(*second api*) and will not work properly
app.get('/api/v1/flights/search' ,(req,res) => {
    
    const {from , to} = req.query;

    res.status(200).json ({
        message : `the requested query is : from = ${from} and to = ${to}`,
        success : true
    })
})

// second api 
app.get('/api/v1/flights/:id' ,(req,res) => {
    const id = req.params.id;

    console.log("request hit success")

    res.status(200).json ({
        message : `the requested id is : ${id}`,
        success : true 
    })
})

app.listen(serverConfig.PORT, () => {
    console.log(`${serverConfig.SERVICE} started on port ${serverConfig.PORT}`);
});
