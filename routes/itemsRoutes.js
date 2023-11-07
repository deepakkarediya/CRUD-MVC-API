const express = require('express');
const itemsController = require('../controllers/itemsController');
const fetchregis = require("../middleware/fetchregis");
const router = express.Router();

// Create a product
router.post('/addItems',fetchregis, itemsController.createItems);

// Get all products
router.get('/getAllItem', fetchregis,itemsController.getAllItems);

// Get a product by ID
router.get('/:ItemId',fetchregis, itemsController.getItemsById);

// Update a product by ID
router.put('/:ItemId', fetchregis,itemsController.updateItems);

// Delete a product by ID
router.delete('/:ItemId',fetchregis,itemsController.deleteItems);

module.exports = router;
