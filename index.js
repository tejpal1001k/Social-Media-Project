const express = require('express');
const app = express();
const port = 8000;



app.listen(port, (err) =>{
    if(err){
        console.log(`error in running the server :${error}`);
    }
    console.log(`Server is running successfully :${port}`);
});
