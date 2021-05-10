const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const itemController = require('../controllers/ItemController');
router.post('/register', authController.register);
router.post('/login', authController.login);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Admin routes


/**
 * @swagger
 * /api/admin/products:
 *   get:
 *     description: Get all products
 *     responses:
 *       200:
 *         description: The list of the products
 */
router.get('/admin/products', itemController.getAll);

/**
 * @swagger
 * /api/admin/products/{id}:
 *   get:
 *     summary: Get the product by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *       
 *       404:
 *         description: The book was not found
 */
router.get('/admin/products/:id', itemController.getById);

router.post('/admin/products', itemController.post);
router.put('/admin/products/:id', itemController.put);
router.delete('/admin/products/:id', itemController.delete);

module.exports = router;