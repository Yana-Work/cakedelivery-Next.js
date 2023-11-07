'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SuccessPage = () => {
   const searchParams = useSearchParams();
   const payment_intent = searchParams.get('payment_intent');
   const router = useRouter();

   useEffect(() => {
      const fetchData = async () => {
         try {
            await fetch(`/api/confirm/${payment_intent}`, {
               method: 'PUT'
            });
            router.push('/orders');
         } catch (error) {
            console.error('Error confirming payment:', error);
         }
      };
      fetchData();
   }, [payment_intent, router]);

   return (
      <div className='p-4'>
         Payment successful. You are being redirected to the orders page.
         Please do not close the page.
      </div>
   );
};

export default SuccessPage;
