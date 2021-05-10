const express = require('express');
const router = express.Router();


const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

//Admin routes
router.get('/admin/item', authController.login);


module.exports = router;