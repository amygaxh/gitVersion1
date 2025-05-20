const Message = require('../models/message');
const nodemailer = require('nodemailer');

exports.sendContact = async (req, res) => {
  try {
    const msg = await Message.create(req.body);

    const transporter = nodemailer.createTransport({ /* … */ });
    await transporter.sendMail({
      from: `"WiseDesign Kontakt" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,        
      replyTo: msg.email,              
      subject: `Mesazh nga ${msg.name} ${msg.surname}`,
      text: msg.message
    });

    res.json({ ok: true, id: msg._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
