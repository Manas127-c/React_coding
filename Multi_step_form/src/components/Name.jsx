import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Name() {
  let name=useRef(null)
  return (
    <>
        <h1 className='absolute left-1/2 -translate-x-[50%] text-5xl text-black font-semibold mt-2'>Multi Step Form</h1>
        <div className='absolute left-1/2 -translate-x-[50%] top-[30%] -translate-y-[50%] bg-red-300 w-[30%] p-3 flex flex-col'>
          <label className='text-base '>Name</label>
          <input ref={name} type="text" name="" id="" className=' outline-none w-[90%] h-10 rounded mt-3 px-3' />
          <Link to='/email' onClick={()=>console.log(name.current.value)} className='w-[10%] p-1 rounded bg-purple-700 text-white mt-5'>Next</Link>         
        </div>
    </>
  )
}

export default Name