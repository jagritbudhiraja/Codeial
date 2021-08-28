const express=require('express');
const port=8000;
const app=express();
// use express router app.use is a middleware
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err)
    console.log(`error in running express js:${err}`);
    console.log(`server running succesfully on port:${port}`);
});