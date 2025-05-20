const Item = require('../models/Product');

exports.createItem = async (req, res) => {
  try {
    const product = await Item.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (_req, res) => {
  const products = await Item.find().sort('-createdAt');
  res.json(products);
};