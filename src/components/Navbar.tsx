import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Link from 'next/link'
import Image from 'next/image'
import UserLinks from './UserLinks';


const Navbar = () => {

   const user = false;

   return (
      <div className='h-14 p-4 text-xl font-medium flex justify-between items-center md:h-16 md:px-8 lg:px-20 xl:px-40 border-b-2'>
         {/* LEFT LINKS MEDIUM SCREEN */}
         <div className='hidden md:flex flex-1 gap-4 md:gap-2 lg:gap-6'>
            <Link href='/'>Homepage</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/'>Contact</Link>
         </div>
         {/* LOGO */}
         <div className='flex-1 text-rose-600 text-2xl lg:text-4xl font-bold font-title [word-spacing:10px] md:text-center'>
            <Link href='/'>NK HomeBakery</Link>
         </div>
         {/* MOBILE MENU */}
         <div className='md:hidden'>
            <Menu />
         </div>
         {/* RIGHT LINKS MEDIUM SCREEN */}
         <div className='hidden md:flex items-center gap-4 md:gap-2  lg:gap-6 justify-end flex-1'>
            <div className='md:absolute md:text-lg top-2 r-2 lg:static flex items-center gap-1 cursor-pointer text-white bg-zinc-500 pr-1 rounded-full'>
               <Image src='/phone-pink.png' width={30} height={30} alt='' />
               <span>123-456-7890</span>
            </div>
            <UserLinks />
            <CartIcon />
         </div>
      </div>
   )
}

export default Navbar
