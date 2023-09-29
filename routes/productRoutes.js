const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Create a product
router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get a product by ID
router.get('/:productId', productController.getProductById);

// Update a product by ID
router.put('/:productId', productController.updateProduct);

// Delete a product by ID
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
