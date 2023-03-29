import React from 'react';

const DeleteModal = ({showModal,setShowModal,info}) => {
  
    return (
        <div className='flex justify-center items-center'>

            {/* outside click to hide modal */}
        <div onClick={()=>setShowModal(!showModal)} className={`w-screen z-10 h-screen  ${showModal ?'fixed top-0 left-0':'hidden'}`}></div>

        {/* Delete modal */}
        <div className={`bg-base-200 min-w-[400px] z-30 border-2 ${showModal ?'absolute top-[15%] transition-all duration-300 left-[10%] sm:left-[25%] md:left-[35%]':'absolute left-[10%] sm:left-[25%] md:left-[35%] -top-[600px]  transition-all duration-300'} shadow-slate-400 rounded-md backdrop-blur-sm backdrop-contrast-100 shadow-2xl py-4 px-4 ]`}>
            <div>
                <h2 className='text-lg font-bold'>Confirm to delete {info.id}</h2> 
            </div>
            {/* Save And Cancel Button */}
      <div className='flex justify-end gap-3 my-3'>
       {/* Cancel Button */}
       <label onClick={()=>setShowModal(!showModal)} 
       onClickCapture={()=>reset()}
       className='bg-teal-100 text-teal-600 px-5 rounded-sm py-2 cursor-pointer select-none'>Cancel</label> 

       {/* Save Button*/}
        <button className='bg-rose-100 text-rose-600 px-5 rounded-sm py-2'>Confirm</button>
      </div>
        </div>
     
   </div>
    );
};

export default DeleteModal;