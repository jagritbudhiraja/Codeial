const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));
//general format for router files
// router.use('./routername',require('./routerfilename'));
module.exports=router;

console.log('router loaded');