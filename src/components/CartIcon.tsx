'use client'

import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const CartIcon = () => {

   const { totalItems } = useCartStore()

   useEffect(() => {
      useCartStore.persist.rehydrate()
   }, [])

   return (
      <Link href='/cart' className='flex items-center gap-1' >
         <div className='relative w-7 h-7'>
            <Image src='/cart-pink.png' alt='' width={28} height={28} />
         </div>
         <span>Cart ({totalItems})</span>
      </Link>
   )
}

export default CartIcon
