import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Email() {
  const navigate=useNavigate()
    const goback=()=>{
        navigate(-1)
        // navigate(-1)// one step back ,-2 = two step back
    }
  return (
    <>
    
    <h1 className='absolute left-1/2 -translate-x-[50%] text-5xl text-black font-semibold mt-2'>Multi Step Form</h1>
        <div className='absolute left-1/2 -translate-x-[50%] top-[30%] -translate-y-[50%] bg-red-300 w-[30%] p-3 flex flex-col'>
        <h1 onClick={()=>goback()}className='text-xs underline-offset-1 cursor-pointer text-white '>Back</h1>
          <label className='text-base mt-5'>Email</label>
          <input type="email" name="" id="" className=' outline-none w-[90%] h-10 rounded mt-3 px-3' />
          <Link to='/email/password' className='w-[10%] p-1 rounded bg-purple-700 text-white mt-5'>Next</Link>
                   
        </div>
    </>
  )
}

export default Email