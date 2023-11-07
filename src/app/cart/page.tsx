'use client'

import { useCartStore } from '@/utils/store'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Cart = () => {

   const { products, totalItems, totalPrice, removeFromCart, clearCart } = useCartStore()
   const { data: session } = useSession()
   const router = useRouter()

   useEffect(() => {
      useCartStore.persist.rehydrate()
   }, [])

   const handleCheckout = async () => {
      if (!session) {
         router.push('/login')
      } else {
         try {
            const res = await fetch('/api/orders', {
               method: 'POST',
               headers: { 'Content-Type': "application/json" },
               body: JSON.stringify({
                  price: totalPrice,
                  products,
                  status: "In progress",
                  userEmail: session.user?.email
               })
            })
            const data = await res.json()
            router.push(`/pay/${data.id}`)
            clearCart()
         } catch (err) {
            console.error('Error:', err);
         }
      }
   }

   return (
      <div className='text-lg 2xl:text-2xl h-[calc(100vh-6rem)] md:h-[calc(100vh-6.5rem)] flex flex-col lg:flex-row'>
         {/* PRODUCT CONTAINER */}
         <div className='h-1/2 lg:h-full lg:w-2/3 2xl:w-1/2 p-4 md:px-8 lg:px-20 xl:px-40 flex flex-col overflow-y-auto justify-center'>
            {/* SINGLE ITEM CONTAINER */}
            {products.map(item => (
               <div className='flex justify-between mb-4' key={item.id}>
                  <div className='relative w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem]'>
                     {item.img && (
                        <Image src={item.img} layout="fill" className='object-cover' alt='' />
                     )}
                  </div>
                  <div className=''>
                     <h1 className='text-xl 2xl:text-2xl font-bold'>{item.title} x {item.quantity}</h1>
                     <span>{item.optionTitle}</span>
                  </div>
                  <h2 className='font-bold'>${item.price}</h2>
                  <span className='cursor-pointer' onClick={() => removeFromCart(item)}>X</span>
               </div>
            ))}
         </div>
         {/* PAYMENT CONTAINER */}
         <div className='h-1/2 lg:h-full lg:w-1/3 xl:w-1/2 p-4 md:px-8 lg:px-20 xl:px-40 bg-zinc-200 flex flex-col gap-4 justify-center 2xl:gap-6'>
            <div className='flex justify-between'>
               <span className=''>Subtotal ({totalItems} items)</span>
               <span className=''>${totalPrice}</span>
            </div>
            <div className='flex justify-between'>
               <span className=''>Delivery Cost</span>
               <span className=''>FREE</span>
            </div>
            <hr className='bg-rose-600 my-2' />
            <div className='flex justify-between text-xl 2xl:text-2xl font-bold text-rose-600 tracking-widest'>
               <span className=''>TOTAL</span>
               <span className=''>${totalPrice}</span>
            </div>
            <button
               className='bg-rose-600 text-white tracking-widest py-2 px-6 w-1/2 rounded-full cursor-pointer self-end'
               onClick={handleCheckout}
            >
               CHECKOUT
            </button>
         </div>
      </div>
   )
}

export default Cart
