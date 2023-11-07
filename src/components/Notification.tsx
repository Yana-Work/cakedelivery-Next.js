import Image from 'next/image'
import React from 'react'

function Notification() {
   return (
      <div className='h-12 bg-zinc-500 text-white px-2 flex items-center justify-center text-center text-sm md:text-lg cursor-pointer'>
         <span className='p-3'>Cakes for your holidays! Free delivery for all orders over $50</span>
      </div>
   )
}

export default Notification
