require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log('MongoDB connected'));

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/pay', require('./routes/paymentRoutes'));
app.use('/api/mail', require('./routes/mailRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server on ${PORT}`));