"use client"

import PriceProduct from '@/components/PriceProduct'
import { ProductType } from '@/types/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SingelProduct = ({ params }: { params: { id: string } }) => {
   const [singleProduct, setSingleProduct] = useState<ProductType | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(`/api/product/${params.id}`, {
               cache: 'no-store'
            });
            if (!res.ok) {
               throw new Error('Failed!');
            }
            const data = await res.json();
            setSingleProduct(data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, [params.id]);

   return (
      <div className='p-4 md:px-8 lg:px-20 xl:px-40 min-h-[calc(100vh-6.5rem)] flex flex-col justify-around md:flex-row md:gap-8'>
         {/* IMAGE CONTAINER */}
         {singleProduct && singleProduct.img && (
            <div className='relative flex-1 h-1/2 min-h-[15rem] md:min-h-[20rem]'>
               <Image
                  src={singleProduct.img}
                  className='object-cover'
                  layout="fill"
                  alt=''
               />
            </div>
         )}
         {/* TEXT CONTAINER */}
         {singleProduct && (
            <div className='h-1/2 flex-1 flex flex-col gap-4 py-2 min-h-[15rem] md:min-h-[20rem]'>
               <h1 className='text-3xl font-bold'>{singleProduct.title}</h1>
               <p>{singleProduct.desc}</p>
               <PriceProduct product={singleProduct} />
            </div>
         )}
      </div>
   )
}

export default SingelProduct

