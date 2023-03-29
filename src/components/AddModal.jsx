import React from 'react';

const AddModal = ({showModal,setShowModal}) => {
    return (
        <div className='flex justify-center items-center'>
            <form action="" className='bg-base-200 w-96 border fixed top-1/4  shadow-slate-400 rounded-md backdrop-blur-sm backdrop-contrast-100 shadow-2xl py-4 px-4 h-96'>
               <div className='mt-2'>
                <label htmlFor="name"> Full Name</label>
               <input className='w-full px-4 bg-transparent py-2 border rounded-md' type="text" name="" id="" />
               </div>
               <div className='mt-2'>
                <label htmlFor="phone">Phone number</label>
               <input className='w-full px-4 bg-transparent py-2 border rounded-md' type="text" name="" id="" />
               </div>
               <div className='mt-2'>
                <label htmlFor="email">Email</label>
               <input className='w-full px-4 bg-transparent py-2 border rounded-md' type="text" name="" id="" />
               </div>
               <div className='mt-2'>
                <label htmlFor="hobbies">Hobbies</label>
               <input className='w-full px-4 bg-transparent py-2 border rounded-md' type="text" name="" id="" />
               </div>
               {/* Save And Cancel Button */}
               <div className='flex justify-between my-3'>
                {/* Cancel Button */}
                <label onClick={!showModal} className='bg-rose-100 text-rose-600 px-5 rounded-sm py-2 cursor-pointer select-none'>Cancel</label> 

                {/* Save Button*/}
                 <button className='bg-teal-100 text-teal-600 px-5 rounded-sm py-2'>Save</button>
               </div>
               
            </form>
        </div>
    );
};

export default AddModal;