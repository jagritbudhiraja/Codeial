const express=require('express');
const port=8000;
const app=express();
// use express router app.use is a middleware
app.use('/',require('./routes'));
// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err)
    console.log(`error in running express js:${err}`);
    console.log(`server running succesfully on port:${port}`);
});