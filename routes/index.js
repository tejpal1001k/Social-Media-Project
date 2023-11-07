 const express = require('express');
 //middleware 
 const router = express.Router();
 const homeController = require('../controllers/home_controller');

 console.log("succesfully working router");
 router.get('/',homeController.home);
 router.use('/users', require('./users'));




 module.exports = router;