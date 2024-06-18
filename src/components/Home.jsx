import React from 'react';
import profileImg from '../assets/profile.png';

const Home = () => {
  return (
    <div className="container mt-9 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between">
        <div className="w-full sm:w-1/2">
          <div className="w-80 h-80 sm:w-96 sm:h-96 bg-slate-900 flex justify-center items-center rounded-full shadow-2xl mx-auto mb-8 sm:mb-0">
            <img className="w-full h-full rounded-full" src={profileImg} alt="Asad" />
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h1 className="text-black font-medium font-serif text-5xl text-center mb-4">Hello!</h1>
          <p className="text-center mb-6">Explore this Portfolio Now! To see Who I am and What I do!</p>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="hover:-translate-x-1 hover:scale-110 duration-300 p-3 px-6  py-1 text-center align-middle bg-slate-900 text-white rounded-3xl hover:bg-white hover:text-slate-900">Resume</button>
            <button className="hover:-translate-x-1 hover:scale-110 duration-300 p-3 px-6  py-1 text-center align-middle bg-slate-900 text-white rounded-3xl hover:bg-white hover:text-slate-900">Hire me</button>
          </div>
          <p className="text-center">In this portfolio, you'll discover the creative world of a Development, where Coding and Designing come together. Join me on a journey! Reach me out now!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
