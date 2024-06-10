import React from 'react'

const Navbar = () => {
  return (
   <>
    <div className='text-black   '>
    <h1 className='mx-5 text-sm font-semibold hover:text-red-400'>Mahi's Resume</h1>
      <nav>
        <ul className='flex mx-7 justify-end' >
            <a href="/"><li className='mx-5 py-4 px-4 text-center text-xl font-serif cursor-pointer hover:text-red-400'>Home</li></a>
            <a href="/"><li className='mx-5 py-4 px-4 text-center text-xl font-serif cursor-pointer hover:text-red-400'>About</li></a>
           <a href="/"> <li className='mx-5  py-4 px-4 text-center text-xl font-serif cursor-pointer hover:text-red-400'>Contact</li></a>
        </ul>
      </nav>

     
    </div>
    
    
      
      </>
  )
}

export default Navbar
