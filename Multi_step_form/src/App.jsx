import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Email from './components/Email'
import Name from './components/Name'
import Password from './components/Password'
import Showdata from './components/Showdata'

function App() {
  return (
    <>
      
      <div className='w-full h-screen relative '>
      <Routes>
        <Route path='/' element={<Name/>}/> 
        <Route path='/email' element={<Email/>}/>
        <Route path='/email/password' element={<Password/>}/>
        <Route path='/email/password/showdata' element={<Showdata/>}/>
        </Routes>
        <Link to='/' className='text-md font-semibold'>Home</Link>
      </div>
    </>
  )
}

export default App