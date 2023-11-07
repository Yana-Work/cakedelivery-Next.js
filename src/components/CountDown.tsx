'use client'
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date('2023-12-30');

const CountDown = () => {
   const [clientLoaded, setClientLoaded] = useState(false);

   useEffect(() => {
      setClientLoaded(true);
   }, []);

   return (
      <div>
         {clientLoaded ? (
            <Countdown date={endingDate} className='fonf-bold text-3xl text-yellow-200 p-6' />
         ) : (
            <div>Loading Countdown...</div>
         )}
      </div>
   );
};

export default CountDown;




