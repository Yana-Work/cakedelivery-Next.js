"use client"

import { ProductType } from '@/types/types';
import React, { useState, useEffect } from 'react';
import FeaturedProducts from './FeaturedProducts';

const Featured = () => {
   const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch('/api/product', {
               cache: 'no-store'
            });
            if (!res.ok) {
               throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            setFeaturedProducts(data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };
      fetchData();
   }, []);

   return (
      <div className='w-screen overflow-x-auto flex flex-col py-4'>
         <FeaturedProducts featuredProducts={featuredProducts} />
      </div>
   );
};

export default Featured;

