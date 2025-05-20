const router = require('express').Router();
const { createItem, getAll } = require('../controllers/productController');

router.route('/')
  .post(createItem)   
  .get(getAll);          

module.exports = router;