import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const postPayment = async (req, res) => {
  let { amount, id, city } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "INR",
      description: city,
      payment_method: id,
      confirm: true,
      customer: process.env.STRIPE_CUSTOMER_ID,
    });

    console.log("Payment", payment);
    res.status(200).json({
      message: "Successfull payment",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPayment = async (req, res) => {
  try {
    res.status(200).send("I am payment endpoint!");
  } catch (err) {
    next(err);
  }
};
