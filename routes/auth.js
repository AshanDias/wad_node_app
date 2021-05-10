const express = require('express');
const router = express.Router();


const authController = require('../controllers/authController');
const itemController = require('../controllers/ItemController');
router.post('/register', authController.register);
router.post('/login', authController.login);

//Admin routes
router.get('/admin/products', itemController.getAll);
router.get('/admin/products/:id', itemController.getById);
router.post('/admin/products', itemController.post);
router.put('/admin/products/:id', itemController.put);
router.delete('/admin/products/:id', itemController.delete);

module.exports = router;