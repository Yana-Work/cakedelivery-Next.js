import { ProductType } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const FeaturedProducts = ({ featuredProducts }: { featuredProducts: ProductType[] }) => {
   return (
      <div className='w-max flex gap-3'>
         {/* SINGLE ITEM */}
         {featuredProducts.map((item) => (
            <Link
               key={item.id}
               href={`/product/${item.id}`}
               className='w-screen h-[80vh] md:w-[50vw] lg:w-[24vw] lg:h-[70vh] flex flex-col items-center justify-around hover:bg-zinc-100 transition-all duration-300 overflow-hidden'
            >
               {/* IMAGE CONTAINER */}
               {item.img && (
                  <div className='relative flex-1 w-full hover:scale-110 transition-all duration-500 overflow-hidden'>
                     <Image src={item.img} fill className='object-cover' alt='' />
                  </div>
               )}
               {/* TEXT CONTAINER */}
               <div className='flex-1 flex flex-col items-center justify-center gap-2 lg:gap-4 py-3'>
                  <h1 className='text-xl font-bold uppercase tracking-wider'>{item.title}</h1>
                  <p className='text-lg text-center p-2'>{item.desc}</p>
                  <span className='text-xl font-bold'>${item.price}</span>
                  <button
                     className='bg-rose-600 text-lg text-white p-2 px-6 rounded-full cursor-pointer'
                     
                  >
                     Details
                  </button>
               </div>
            </Link>
         ))}
      </div>
   );
};

export default FeaturedProducts;
