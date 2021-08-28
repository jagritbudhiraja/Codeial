const express=require('express');
const port=8000;
const app=express();


app.listen(port,function(err){
    if(err)
    console.log(`error in running express js:${err}`);
    console.log(`server running succesfully on port:${port}`);
});