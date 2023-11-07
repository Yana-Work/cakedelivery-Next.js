"use client"

import { ProductType } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
   params: {
      category: string;
   }
}

const CategoryPage = ({ params }: Props) => {
   const [products, setProducts] = React.useState<ProductType[]>([]);

   React.useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(`/api/product?cat=${params.category}`, {
               cache: 'no-store'
            });
            if (!res.ok) {
               throw new Error('Failed!');
            }
            const data = await res.json();
            setProducts(data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };
      fetchData();
   }, [params.category]);

   return (
      <div className='flex flex-wrap min-h-[calc(100vh-6.5rem)]'>
         {products.map(item => (
            <Link
               className='w-full h-1/2 border-r-2 border-b-2 md:w-1/2 lg:w-1/3 flex flex-col justify-between group p-4 odd:bg-zinc-200'
               href={`/product/${item.id}`}
               key={item.id}
            >
               {/* IMAGE CONTAINER */}
               {item.img &&
                  <div className='relative min-h-[15rem] md:min-h-[20rem]'>
                     <Image src={item.img} layout="fill" className='object-cover' alt='' />
                  </div>}
               {/* TEXT CONTAINER */}
               <div className='py-2 flex items-center justify-between'>
                  <h1 className='text-2xl font-bold py-2'>{item.title}</h1>
                  <h2 className='group-hover:hidden text-2xl font-bold'>${item.price}</h2>
                  <button className='hidden group-hover:block bg-rose-600 text-xl text-white p-2 px-6 rounded-full cursor-pointer'>Details</button>
               </div>
            </Link>
         ))}
      </div>
   )
}

export default CategoryPage


