const express = require('express');
const app = express();
const port = 6060;
const router = require('./routes/index.js');


//Routing
app.use('/',router)


app.listen(port, function(err){
    if(err){
        console.log(`error on ${port}`)
        return;
    }
    console.log(`running on port: ${port}`);
})

