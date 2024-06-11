import React from 'react'
import asadImg from '../assets/asad-candid.jpg'

const Home = () => {
  return (
    <>
    <div className="container">
  <div>I am home</div>
    <div className='w-[500px] h-[500px] bg-red-400 flex justify-center rounded-2xl'>
       <div className='flex justify-center w-80 h-80 bg-red-500 m-24 space-x-56 shadow-2xl rounded-full'>
        <img
        className='w-full h-full rounded-full '
        src={asadImg} alt="Done" />
       </div>
      </div>
    </div>
    </>
  )
}

export default Home
