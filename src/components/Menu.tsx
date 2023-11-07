'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'
import { signOut, useSession } from 'next-auth/react'


const Links = [
   { id: 1, title: 'Homepage', url: '/' },
   { id: 2, title: 'Menu', url: '/menu' },
   { id: 3, title: 'Contact', url: '/' },
]

const Menu = () => {

   const [open, setOpen] = useState(false);
   const { status } = useSession()

   return (
      <div className=''>
         <Image
            src={open ? "/close-pink.png" : "/open-pink.png"}
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
         />
         {open && (
            <div className="bg-zinc-500 text-white fixed left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-9 items-center justify-center text-3xl z-10">
               {Links.map((item) => (
                  <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                     {item.title}
                  </Link>
               ))}
               {status === 'authenticated' ? (
                  <div className='flex flex-col gap-9'>
                     <Link href="/orders" onClick={() => setOpen(false)}>
                        Orders
                     </Link>
                     <span className='cursor-pointer' onClick={() => signOut()}>LogOut</span>
                  </div>
               ) : (
                  <Link href="/login" onClick={() => setOpen(false)}>
                     Login
                  </Link>
               )}
               <Link href="/cart" onClick={() => setOpen(false)}>
                  <CartIcon />
               </Link>
            </div>
         )}
      </div>
   )
}

export default Menu
