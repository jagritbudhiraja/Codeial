const express=require('express');
const router=express.Router();
const usersController=require('../controllers/users_controllers');
const passport=require('passport');
router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/sign-up',passport.preventSignedUser,usersController.signUp);
router.get('/sign-in',passport.preventSignedUser,usersController.signIn);
router.post('/create',usersController.Create);
router.get('/sign-out',usersController.endSession);
// Use Passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'}
),usersController.createSession);
module.exports=router;