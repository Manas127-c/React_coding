import React from 'react'
import Box from './components/Box'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center justify-center relative '>
      <h1 className='absolute left-1/2 -translate-x-[50%] top-10 text-3xl text-white '>REACT CALCULATOR</h1>
      <Box/>
    </div>
  )
}

export default App