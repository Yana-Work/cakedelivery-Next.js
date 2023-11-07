'use client'

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {

   const { status } = useSession();
   const router = useRouter();

   if (status === "loading") {
      return <p>Loading...</p>;
   }
   if (status === "authenticated") {
      router.push("/")
   }

   return (
      <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-6.5rem)] p-4 md:px-8 lg:px-20 xl:px-40 flex items-center justify-center'>
         {/* BOX */}
         <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%]'>
            {/* IMAGE CONTAINER */}
            <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
               <Image src='/blueberry-pie.jpg' fill className='object-cover' alt='' />
            </div>
            {/* FORM CONTAINER */}
            <div className='p-8 flex flex-col gap-8 items-center justify-center md:w-1/2'>
               <h1 className='font-bold text-lg xl:text-3xl uppercase tracking-widest'>Welcome</h1>
               <p>Log into your account or create a new using social buttons</p>
               <button className='flex gap-4 p-4 ring-1 rounded-full w-full' onClick={() => signIn('google')}>
                  <Image src='/google.png' width={20} height={20} className='object-contain' alt='' />
                  <span>Sing in with Google</span>
               </button>
               <p className='text-sm'>
                  Have a problem? <Link href='/' className='underline'>Contact us</Link>
               </p>
            </div>
         </div>
      </div>
   )
}

export default LoginPage
