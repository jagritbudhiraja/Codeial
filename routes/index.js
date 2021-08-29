const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
router.get('/about',homeController.about);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
//general format for router files
// router.use('./routername',require('./routerfilename'));
module.exports=router;

console.log('router loaded');