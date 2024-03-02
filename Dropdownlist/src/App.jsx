import React from 'react'
import { useState } from 'react'

const App = () => {
  const data=[{name:'india',value:'IN',cities:['delhi','odisha']},{name:'USA',value:'US',cities:['moko','loko']},{name:'nepal',value:'NE',cities:['Kathmandu','kathaki']},{name:'bangladesh',value:'BD',cities:['bangla','deshi']}]
  const [city,setcity]=useState(['delhi','odisha'])
  const check=(i)=>{
    const c=data.filter((e,index)=>{
      return i==index 
    })
    const {cities}=c[0]
    setcity(cities)
  }
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center gap-5'>
      <select onChange={(e)=>check(e.target.value)}>
        {data.map((e,i)=>{
          return (<option key={i}  value={i}>{e.name}</option>)
        })}
      </select>
      <select>
        {city.map((e,i)=>{
          return (<option key={i}  value={i}>{e}</option>)
        })}
      </select>
    </div>
  )
}

export default App