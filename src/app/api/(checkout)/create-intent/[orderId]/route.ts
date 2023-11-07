import { prisma } from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(
   request: NextRequest,
   { params }: { params: { orderId: string } }
) {
   const { orderId } = params;

   const order = await prisma.order.findUnique({
      where: {
         id: orderId,
      }
   });

   if (order) {
      const priceAsNumber = parseFloat(order.price.toString());
      const paymentIntent = await stripe.paymentIntents.create({
         amount: priceAsNumber * 100,
         currency: "usd",
         automatic_payment_methods: {
            enabled: true,
         },
      });

      await prisma.order.update({
         where: {
            id: orderId,
         },
         data: { intent_id: paymentIntent.id }
      })

      return new NextResponse(
         JSON.stringify({ clientSecret: paymentIntent.client_secret }),
         { status: 200 }
      )
   } else {
      return new NextResponse(
         JSON.stringify({ messege: "Order not found" }),
         { status: 404 }
      )
   }
}
