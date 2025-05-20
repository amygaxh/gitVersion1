const nodemailer = require('nodemailer');
const Order = require('../models/Order');

const transporter = nodemailer.createTransport({
  service: 'gmail',                        
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

exports.sendOrder = async (req, res) => {
  const { email, cart, total } = req.body;
  const order = await Order.create({ email, cart, total });

  const mailOptions = {
    from: `"WiseDesign Shop" <${process.env.MAIL_USER}>`,
    to: email,                                
    cc: process.env.MAIL_USER,                
    subject: 'Porosia juaj',
    text: `Faleminderit! Totali: €${total}. Porosi #${order._id}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Porosia u dërgua me email', id: order._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};