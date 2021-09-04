const express=require('express');
const cookieParser=require('cookie-parser');
const port=8000;
const app=express();
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
// used for session cookie
const session=require('express-session');
const passport = require('passport');
const passportLocal=require('./config/passport-local-strategy');
const { Store } = require('express-session');
// MongoStore is used to store the session cookie in the db
const MongoStore=require('connect-mongo');
const sassMiddleWare=require('node-sass-middleware');

app.use(sassMiddleWare({
  src:'./assets/scss',
  dest:'./assets/css',
  debug:true,
  outputStyle:'expanded',
  prefix:'/css'
}));

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);
//Exctracting styles and scripts from subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');
// Expression session middleware for encoding and sending cookie
app.use(session({
  name:'codeial',
  secret:"Something",
  saveUninitialized:false,
  resave:false,
  cookie:{
      maxAge:(1000*60*100)
  },
  store:MongoStore.create({
    mongoUrl:'mongodb://localhost/codeial_development'
})
  
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use express router app.use is a middleware
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err)
    console.log(`error in running express js:${err}`);
    console.log(`server running succesfully on port:${port}`);
});