const express = require('express');
const app = express();

const port = 6060;

app.listen(port, function(err){
    if(err){
        console.log(`error on ${port}`)
        return;
    }
    console.log(`running on port: ${port}`);
})

