"use client"

import { MenuType } from '@/types/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MenuPage = () => {
   const [menu, setMenu] = useState<MenuType>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch('/api/categories', {
               cache: 'no-store'
            });
            if (!res.ok) {
               throw new Error('Failed!');
            }
            const data = await res.json();
            setMenu(data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };
      fetchData();
   }, []);

   return (
      <div className='md:px-8 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-6.5rem)] flex flex-col md:flex-row items-center'>
         {menu.map((category) => (
            <Link
               href={`/menu/${category.slug}`}
               key={category.id}
               style={{ backgroundImage: `url(${category.img})` }}
               className={`bg-${category.color} w-full h-1/2 md:h-3/5 bg-no-repeat bg-contain p-4 bg-[center_left_10rem] md:bg-[center_left_6rem] lg:bg-[center_left_8rem] `}>
               <div className={`text-${category.text} w-[40%]`}>
                  <h1 className='uppercase font-bold text-2xl tracking-wider'>{category.title}</h1>
                  <p className='text-sm my-4'>{category.desc}</p>
                  <button className={`hidden xl:block bg-rose-600 text-white py-2 px-6 rounded-full cursor-pointer`}>Explore</button>
               </div>
            </Link>
         ))}
      </div>
   )
}

export default MenuPage

