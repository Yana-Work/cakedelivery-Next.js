'use client'

import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'
import { useState, useEffect } from 'react';
import { menu } from '../data';
import Link from 'next/link';

const Offer = () => {

   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentSlide(prev => (prev === menu.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
   }, []);

   const currentMenuItem = menu[currentSlide];

   return (
      <div className='bg-zinc-500 h-[100vh] md:h-[50vh] flex flex-col md:flex-row md:justify-between bg-[url("/products/bg-7.jpg")] bg-no-repeat bg-cover bg-right-bottom md:bg-left-bottom'>
         {/* TEXT CONTAINER */}
         <div className='flex-1 flex flex-col justify-center items-center text-center gap-3 md:gap-8 p-4'>
            <h1 className='text-white text-3xl font-bold xl:text-6xl tracking-wide'>{currentMenuItem.title}</h1>
            <p className='text-white xl:text-xl'>{currentMenuItem.desc}</p>
            <CountDown />
            <Link href='/menu' className='bg-rose-600 text-white py-2 px-3 rounded-full cursor-pointer'>Order Now</Link>
         </div>
         {/* IMG CONTAINER */}
         <div className='relative flex-1 w-full md:h-full'>
            <Image src={currentMenuItem.img} alt='' fill className='object-contain' />
         </div>
      </div>
   )
}

export default Offer

