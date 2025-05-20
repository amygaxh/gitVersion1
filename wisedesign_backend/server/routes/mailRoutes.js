const router = require('express').Router();
const { sendOrder } = require('../controllers/mailController');

router.post('/order', sendOrder);  

module.exports = router;