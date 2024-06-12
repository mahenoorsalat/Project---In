import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

  return (
    <>
      <div className='text-black sticky top-0 bg-white z-10 '>
        <h1 className='mx-5 text-sm font-semibold hover:text-red-400'>Mahi's Resume</h1>
        <nav>
          <ul className='flex mx-7 justify-end ' >
            <NavLink to="/"><li className='mx-5 py-4 px-4 text-center text-xl font-serif cursor-pointer hover:text-red-400'>Home</li></NavLink>
            <NavLink to="/about"><li className='mx-5 py-4 px-4 text-center text-xl font-serif cursor-pointer hover:text-red-400'>About</li></NavLink>
            <NavLink to="/contact"> <li className='mx-5  py-4 px-4 text-center text-xl font-serif cursor-pointer hover:text-red-400'>Contact</li></NavLink>
          </ul>
        </nav>


      </div>




    </>
  )
}

export default Navbar
