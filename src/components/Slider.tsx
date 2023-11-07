'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const data = [
   {
      id: 1,
      title: 'Delight in home-delivered sweetness in Lviv',
      image: '/meringue.jpg',
   },
   {
      id: 2,
      title: 'Heighten festivities with tailored exquisite desserts',
      image: '/musecake.jpg',
   },
   {
      id: 3,
      title: 'Delight in our delectable treats in just 48 hours',
      image: '/cakes.jpg',
   },
]

const Slider = () => {

   const [currentSlide, setCurrentSlide] = useState(0)

   useEffect(() => {
      const interval = setInterval(
         () => setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1)),
         5000
      );
      return () => clearInterval(interval)
   }, []);

   return (
      <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[80vh] lg:flex-row lg:h-[60vh]'>
         {/* IMAGE CONTAINER */}
         <div className='relative flex-1 w-full'>
            <Image src={data[currentSlide].image} alt='' fill className='object-cover object-top' />
         </div>
         {/* TEXT CONTAINER */}
         <div className='bg-zinc-100 flex-1 flex items-center justify-center flex-col gap-5 font-bold'>
            <h1 className='flex h-1/2 items-center text-4xl text-center p-4 md:p-12 md:text-5xl md:leading-relaxed xl:text-5xl xl:leading-relaxed'>
               {data[currentSlide].title}
            </h1>
            <Link href='/menu' className='bg-rose-600 text-white py-4 px-8 rounded-full cursor-pointer text-xl'>Order Now</Link>
         </div>
      </div>
   )
}

export default Slider
