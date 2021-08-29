const express=require('express');
const router=express.Router();
const postsController=require('../controllers/posts_controllers');
router.get('/section',postsController.section);

module.exports=router;