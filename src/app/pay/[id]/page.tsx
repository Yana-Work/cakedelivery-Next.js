'use client'

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useEffect, useState } from "react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PayPage = ({ params }: { params: { id: string } }) => {
   const [clientSecret, setClientSecret] = useState<string | null>(null);
   const { id } = params;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(`/api/create-intent/${id}`, {
               method: "POST"
            });
            if (!res.ok) {
               throw new Error('Failed to fetch client secret');
            }
            const data = await res.json();
            setClientSecret(data.clientSecret);
         } catch (error) {
            console.error('Error fetching client secret:', error);
         }
      };
      fetchData();
   }, [id]);

   const options: StripeElementsOptions = {
      clientSecret: clientSecret || "",
      appearance: {
         theme: 'stripe'
      },
   };

   return (
      <div>
         {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
               <CheckoutForm />
            </Elements>
         )}
      </div>
   );
}

export default PayPage;
