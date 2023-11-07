'use client'

import { OrderType } from '@/types/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import React from 'react'
import { toast } from "react-toastify";


const OrdersPage = () => {

   const { data: session, status } = useSession()
   const router = useRouter()

   if (status === 'unauthenticated') {
      router.push('/')
   }

   const { isLoading, data } = useQuery({
      queryKey: ['orders'],
      queryFn: () =>
         fetch('/api/orders').then(
            (res) => res.json(),
         ),
   })

   const queryClient = useQueryClient();

   const mutation = useMutation({
      mutationFn: ({ id, status }: { id: string; status: string }) => {
         return fetch(`/api/orders/${id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(status),
         });
      },
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: ["orders"] });
      },
   });

   const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const input = form.elements[0] as HTMLInputElement;
      const status = input.value;

      mutation.mutate({ id, status });
      toast.success("The order status has been changed!")
   };

   if (isLoading || status === 'loading') return 'Loading...'

   return (
      <div className='p-4 md:px-8 lg:px-20 xl:px-40 min-h-[calc(100vh-6.5rem)] flex flex-col'>
         <table className='w-full border-separate border-spacing-1'>
            <thead>
               <tr className='text-center'>
                  <th className='hidden md:block'>Order ID</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th className='hidden md:block'>Products</th>
                  <th>Status</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item: OrderType) => (
                  <tr
                     key={item.id}
                     className={`${item.status === 'In progress' ? 'bg-red-100' : 'bg-zinc-100'}  text-center`}
                  >
                     <td className='hidden md:block py-2 px-1'>{item.id}</td>
                     <td>{item.createdAt.toString().slice(0, 10)}</td>
                     <td>{item.price}</td>
                     <td className='hidden md:block'>{item.products[0].title}</td>
                     {session?.user?.isAdmin ? (
                        <td>
                           <form
                              className="flex items-center justify-center gap-4"
                              onSubmit={(e) => handleUpdate(e, item.id)}
                           >
                              <input
                                 placeholder={item.status}
                                 className="p-2 ring-1 ring-red-100 rounded-md"
                              />
                              <button className="bg-red-400 p-2 rounded-full">
                                 <Image src="/edit.png" alt="" width={20} height={20} />
                              </button>
                           </form>
                        </td>
                     ) : (
                        <td>{item.status}</td>
                     )}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default OrdersPage
