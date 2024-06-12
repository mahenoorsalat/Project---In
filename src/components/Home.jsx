import React from 'react'
import asadImg from '../assets/asad-candid.jpg'

const Home = () => {
  return (
    <>
    <div className="container flex">
  
    <div className='w-[500px] h-[500px] bg-red-400 flex justify-center rounded-2xl '>
       <div className='flex justify-center w-80 h-80 bg-red-400 m-24 space-x-56 shadow-2xl rounded-full'>
        <img
        className='shadow-2xl w-full h-full rounded-full '
        src={asadImg} alt="Done" />
       </div>
     
      </div> 

      {/* this div you can comment it ,after settling frame uncomment it okay I just prepare to make it easy for you if you like anything to add in these , then you can add in it , senior!*/}
      <div className = "p-24">

      <h1 className='text-black font-medium font-serif  text-5xl text-center' >Hello!</h1>
      <p className='text-center py-6'>Explore this Portfolio Now! To see Who I am and What I do!</p>
      <button className='mx-28 my-4 p-7 py-1 text-center align-middle  bg-red-400 text-white rounded-3xl hover:bg-white hover:text-red-400 '>Resume</button>
      <button className='p-7 py-1 text-center align-middle  bg-red-400 text-white  rounded-3xl hover:bg-white hover:text-red-400'>Hire me</button>
      
      <p>In this portfolio, you'll discover the creative world of a Developement, where Coding and Designning comes together. so , Join me on a journey! Reach me out now!</p>
    
      </div>
    </div>
    </>
  )
}

export default Home
