/* eslint-disable no-undef */
require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.static('public'))

app.use(express.json())

app.use(
  cors({

    origin:"http://localhost:5173/",

  })
)

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

app.post("/create-checkout-session", async (req, res) => {
  try {

    if (!req.body.lineItems) {
      throw new Error("No se encontraron elementos en la solicitud")
    }
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      mode:"payment",
      line_items: req.body.lineItems.map(item => {
        return {
          price_data:{
            currency: "clp",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price,
          },
          quantity: item.quantity
        }
        
      }),
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel"
    })
    res.json({url: session.url})

  } catch (err) {
    res.status(500).json({error:err.message})
  }
})

app.listen(3500)