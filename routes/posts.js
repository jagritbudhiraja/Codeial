const express=require('express');
const router=express.Router();
const postsController=require('../controllers/posts_controllers');
const passport=require('passport');
router.post('/create-post',passport.checkAuthentication,postsController.createpost);

module.exports=router;