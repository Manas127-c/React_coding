import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'

function Box() {
    const arr=['AC','DE','.','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','=']
    const [str,setstr]=useState("")
    const update=(data)=>{
        if(data==='AC'){
            setstr("")
        }else if(data==='DE'){
            setstr((p)=>p.split('').splice(0,str.length-1).join(''))
        }else if(data==='='){
            setstr((p)=>eval(p).toString())
        }else{
            setstr((p)=>p+=data)
        }   
    }

  return (
    <div className='w-[30vw] h-[72vh] border-2 border-zinc-200 p-2 flex flex-col gap-2'>
        <input value={str} type="text" name="" id="" readOnly className='w-full h-[26%] border-[1px] bg-transparent border-zinc-200 outline-none text-white text-3xl p-2' />
        <Buttons data={arr} func={update}/>   
      </div>
  )
}

export default Box