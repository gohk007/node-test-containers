const inventoryModel = require('../models/inventoryModel');

exports.getInventory = (req, res) => {
  res.json(inventoryModel.getInventory());
};

exports.addProduct = (req, res) => {
  const newProduct = req.body;
  
  if (!newProduct.name || !newProduct.category || typeof newProduct.quantity !== 'number' || typeof newProduct.price !== 'number') {
    return res.status(400).json({ message: 'Invalid product data' });
  }

  const addedProduct = inventoryModel.addProduct(newProduct);
  res.status(201).json(addedProduct);
};
