import Link from 'next/link'
import React from 'react'

function Footer() {
   return (
      <div className='h-14 p-4 font-bold md:h-16 md:px-8 lg:px-20 lg:px-20 xl:px-40 flex items-center justify-between border-t-2 mt-auto'>
         <Link href='/'>NK HomeBakery </Link>
         <p>© All Rights Reserved</p>
      </div>
   )
}

export default Footer
