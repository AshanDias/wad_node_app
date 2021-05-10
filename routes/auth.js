const express = require('express');
const router = express.Router();


const authController = require('../controllers/authController');
const itemController = require('../controllers/ItemController');
router.post('/register', authController.register);
router.post('/login', authController.login);

//Admin routes
router.get('/admin/products', itemController.getAll);


module.exports = router;