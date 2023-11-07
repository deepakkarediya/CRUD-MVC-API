const Items = require("../models/Items");


exports.createItems = async (req, res) => {
    try {
      const items = new Items(req.body);
      const savedItem = await items.save();
      res.json({savedItem,message:"saved"});
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  // Get all products
  exports.getAllItems = async (req, res) => {
    try {
      const items = await Items.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Get a product by ID
exports.getItemsById = async (req, res) => {
    try {
      const items = await Items.findById(req.params.ItemId);
      if (!items) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Update a product by ID
exports.updateItems = async (req, res) => {
    try {
      const updatedItems = await Items.findByIdAndUpdate(req.params.ItemId, req.body, {
        new: true,
      });
      if (!updatedItems) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(updatedItems);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Delete a product by ID
  exports.deleteItems = async (req, res) => {
    try {
      const deletedItems = await Items.findByIdAndRemove(req.params.ItemId);
      if (!deletedItems) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
