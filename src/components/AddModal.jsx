import { nanoid } from 'nanoid'

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddModal = ({showModal,setShowModal}) => {
  // get nanoid for unique id
  const id  = nanoid(10) 

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const handleFormData = data => {
      const tableData = {
        id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        hobbies: data.hobbies
      }
      fetch(`http://localhost:5000/tableData`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(tableData)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setShowModal(!showModal)
        reset()
        toast.success('Hobbie added')
      })
        
    };
    return (
            <div className='flex justify-center items-center '>
                {/* outside click to hide modal */}
                 <div onClick={()=>setShowModal(!showModal)} className={`w-screen z-10 h-screen ${showModal ?'fixed top-0 left-0':'hidden'}`}></div>
                {/* Form */}
            <form onSubmit={handleSubmit(handleFormData)} action="" className={`bg-base-200 w-96 overflow-y-scroll z-30 border-2 ${showModal ?'fixed top-[15%] transition-all duration-300':'absolute -top-[600px]  transition-all duration-300'} shadow-slate-400 rounded-md backdrop-blur-sm backdrop-contrast-100 shadow-2xl py-4 px-4`}>

                {/* Full Name */}
               <div className='mt-2'>
                <label htmlFor="name">Full Name <span className='text-rose-500'>*</span></label>
               <input {...register("name",{ required: "Name is required" })} className='w-full px-4 bg-transparent py-2 border-2 rounded-md' type="text" id="" />
                 {/* Validation Warning */}
               {errors.name && <p role="alert" className='text-rose-500'>{errors.name?.message}</p>}
               </div>

               {/* Phone Number */}
               <div className='mt-2'>
                <label htmlFor="phone">Phone number <span className='text-rose-500'>*</span></label>
               <input {...register("phone", { required: "Phone number is required" })} className='w-full px-4 bg-transparent py-2 border-2 rounded-md' type="text" id="" />
                 {/* Validation Warning */}
               {errors.phone && <p role="alert" className='text-rose-500'>{errors.phone?.message}</p>}
               </div>

               {/* Email */}
               <div className='mt-2'>
                <label htmlFor="email">Email <span className='text-rose-500'>*</span></label>
               <input  {...register("email", { required: "Email Address is required" })} className='w-full px-4 bg-transparent py-2 border-2 rounded-md' type="text" id="" />
               {/* Validation Warning */}
               {errors.email && <p role="alert" className='text-rose-500'>{errors.email?.message}</p>}
               </div>

               {/* Hobbies */}
               <div className='mt-2'>
                <label htmlFor="hobbies">Hobbies <span className='text-rose-500'>*</span></label>
               <textarea  {...register("hobbies", { required: "Hobbies is required" })} className='w-full px-4 bg-transparent h-24 py-2 border-2 rounded-md' />
                 {/* Validation Warning */}
               {errors.hobbies && <p role="alert" className='text-rose-500'>{errors.hobbies?.message}</p>}
               </div>
               {/* Save And Cancel Button */}
               <div className='flex justify-between my-3'>
                {/* Cancel Button */}
                <label onClick={()=>setShowModal(!showModal)} 
                onClickCapture={()=>reset()}
                className='bg-rose-100 text-rose-600 px-5 rounded-sm py-2 cursor-pointer select-none'>Cancel</label> 

                {/* Save Button*/}
                 <button className='bg-teal-100 text-teal-600 px-5 rounded-sm py-2'>Save</button>
               </div>
               
            </form>
            </div>
    );
};

export default AddModal;