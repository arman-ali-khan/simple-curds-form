import React, { useState } from 'react';

const App = () => {
  const [showModal,setShowModal] = useState(false)
  return (
<section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div class="flex flex-col justify-center h-full">
         {/* Table  */}
        <div class="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">
            <header class="px-5 py-4 border-b border-gray-100 flex justify-between">
                <h2 class="font-semibold text-gray-800">Simple CURDS Table</h2>
                {/*  */}
                <button onClick={()=>setShowModal(!showModal)} className='bg-teal-100 text-teal-600 px-3 py-1 rounded'>Add</button>

            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left"></div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">ID</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Name</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Phone Number</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Hobbies</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Update/delete</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                       
                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex justify-center items-center">
                                         <input type="checkbox" name="" id="" className='h-4 w-4 cursor-pointer appearance-none border-[1px] border-gray-400 shadow-lg rounded-md checkbox' />
                                          </div>
                                    </div>
                                </td>
                                {/* ID */}
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center"> 
                                    <div class="text-left font-medium text-green-500">220</div>
                                    </div>
                                </td>
                                {/* NAME */}
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">Full Name</div>
                                    </div>
                                </td>
                                {/* PHONE NUMBER */}
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">12345678</div>
                                </td>
                                {/* EMAIL */}
                                <td class="p-2 whitespace-nowrap">
                                <div class="text-left">user@email.com</div>
                                </td>
                                {/* HOBBIES */}
                                <td class="p-2 whitespace-nowrap">
                                <div class="text-left">User Hobbies</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">
                                    <button className='text-sm bg-blue-100 text-blue-600 px-4 py-1 rounded hover:bg-blue-200 transition-all duration-150'>Update</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default App;