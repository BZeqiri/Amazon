const functions = require("firebase-functions");
const express = require("express");
const cors =require("cors");
const { response, request } = require("express");
const stripe = require("stripe")('sk_test_51Jmg1JHDWmXaR9ll4cCykAWQLKhBv4dHozIwXUC6j5C0vDyokwbnM4aNJcCRYg7lDRJjoi2d1xl6AQOCgrFNRgwJ00mMUPLevf');

//API

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API route
app.get('/', (request, response)=> response.status(200).send('hello world!!!'))

app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;
    console.log('Payment request Recieved !!! for these amount : ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency:"usd",
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})

//Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/fir-7bfaa/us-central1/api

