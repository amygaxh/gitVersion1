const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
  const { cart } = req.body;           
  const line_items = cart.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: { name: item.name },
      unit_amount: item.price * 100
    },
    quantity: item.qty
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url : `${process.env.CLIENT_URL}/checkout`
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};