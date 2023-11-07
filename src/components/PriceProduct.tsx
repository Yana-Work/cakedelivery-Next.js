'use client';

import { ProductType } from '@/types/types';
import { useCartStore } from '@/utils/store';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const PriceProduct = ({ product }: { product: ProductType }) => {
   const [total, setTotal] = useState(product.price)
   const [quantity, setQuantity] = useState(1)
   const [selected, setSelected] = useState(0)

   const { addToCart } = useCartStore()

   useEffect(() => {
      useCartStore.persist.rehydrate()
   }, [])

   useEffect(() => {
      if (product.options?.length) {
         setTotal(
            (quantity * product.price) + (quantity * product.options[selected].additionalPrice)
         );
      }
   }, [quantity, selected, product])

   const handleCart = () => {
      addToCart({
         id: product.id,
         title: product.title,
         img: product.img,
         price: total,
         ...(product.options?.length && {
            optionTitle: product.options[selected].title
         }),
         quantity: quantity,
      })
      toast.success('The product added to the cart!')
   }

   return (
      <div className='flex flex-col gap-6 md:mt-auto'>
         <h2 className='text-2xl font-bold'>${total}</h2>
         {/* OPTIONS CONTAINER */}
         <div className='flex gap-6'>
            {product.options?.length &&
               product.options?.map((option, index) => (
                  <button
                     key={option.title}
                     className='max-w-[5rem] flex items-center justify-center text-xl py-2 px-6 ring-1 ring-rose-600 rounded-full cursor-pointer'
                     style={{
                        background: selected === index ? 'rgb(225 29 72)' : 'white'
                     }}
                     onClick={() => setSelected(index)}
                  >
                     {option.title}
                  </button>
               ))
            }
         </div>
         {/* QUANTITY and CART BUTTON CONTAINER*/}
         <div className='flex justify-between items-center'>
            {/* QUANTITY */}
            <div className='text-xl flex justify-between items-center w-full ring-1 ring-rose-600 rounded-full'>
               <span className='px-2'>Quantity</span>
               <div className='flex gap-4 items-center text-2xl '>
                  <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'-'}</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(prev => (prev < 5 ? prev + 1 : 5))}>{'+'}</button>
               </div>
               {/* CART BUTTON */}
               <button
                  className='bg-rose-600 text-white py-2 px-6 rounded-full cursor-pointer'
                  onClick={handleCart}
               >
                  Add to Cart
               </button>
            </div>
         </div>
      </div>
   )
}

export default PriceProduct
