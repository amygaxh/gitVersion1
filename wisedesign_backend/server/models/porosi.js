const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  email: String,
  cart : Array,    
  total: Number
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
