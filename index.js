const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScript', true);

 //use express router
 app.use('/', require('./routes/index')); 

//  setting up the view engine
 app.set('view engine', 'ejs');
 app.set('views', './views')


app.listen(port, (err) =>{
    if(err){
        console.log(`error in running the server :${error}`);
    }
    console.log(`Server is running successfully :${port}`);
});
