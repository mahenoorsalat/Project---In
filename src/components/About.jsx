import React from 'react'
import webImage from '../assets/web.jpg'
import designImg from '../assets/design.jpg'
import EditImg from '../assets/Editor.jpg'


const About = () => {
  return (
    <>

      <div className=" w-full h-full bg-red-200 pt-7 py-7">

        {/* web developement */}

        <div className="w-20% h-50% justify-center text-center bg-red-300 mx-48 space-y-3 align-middle pt-6 flex rounded-2xl hover:shadow-lg hover:transition-all hover:duration-5s ">

          <div>
            <h1 className="italic font-bold bd-red-100 font-serif">Web Developer</h1>
            <p className='m-8'>Web Development,Proficient in HTML, CSS ,  JavaScript , CSS Tailwind , React js , Next js to build responsive and dynamic websites. Skilled in both designing and developing that are user-friendly and aesthetically pleasing. As a Front-end Developer, I thrive on the creative process of turning ideas into visually stunning and interactive digital experiences. With a strong foundation in we development technologies and a passion for clean, efficient code, I am dedicated to crafting engaging user interfaces that seamlessly blend form and function. Constantly seeking to stay updated with the latest industry trends and best practices, I am committed to delivering high-quality solutions that exceed expectations and drive user satisfaction.</p>

          </div>
          <div className='w-full h-full pt-16 px-6  rounded-full border-red-300 hover:shadow-lg hover:transition-all hover:duration-5s'>
            <img src={webImage} alt="Development" />
          </div>

        </div>


        {/*designer */}

        <div className="w-20% h-50% justify-center text-center m-9 bg-red-300 mx-48 space-y-3 align-middle pt-6 flex rounded-2xl hover:shadow-lg hover:transition-all hover:duration-5s">

          <div>
            <h1 className="italic font-bold bd-red-100 font-serif">Designer</h1>
            <p className='m-8'>Logo Design, I can boost your company’s brand identity by designing a unique and memorable logo. I can also make application design that are able to eye catch the customer as I have the experience of it. as a UI / UX Designer I can create a user - centered design approach , I craft visually stunning and intuitively functional interfaces that enhance user experience and drive engagement,ensuring your digital product not only looks amazing but also perform seamlessly</p>

          </div>
          <div className='w-full h-full pt-16 px-6  rounded-full border-red-300 hover:shadow-lg hover:transition-all hover:duration-5s'>
            <img src={designImg} alt="Development" />
          </div>

        </div>

        {/*vedio Editor */}

        <div className="w-20% h-50% justify-center text-center m-9 bg-red-300 mx-48 space-y-3 align-middle pt-6 flex rounded-2xl hover:shadow-lg hover:transition-all hover:duration-5s">

          <div>
            <h1 className="italic font-bold bd-red-100 font-serif ">Vedio Editor</h1>
            <p className='m-8'>Video Editing,Expertise in creating visually appealing video content that captures attention. I have the capacity to increase your views by making mesmerizing vedios. As a meticulous editor with a keen eye for detail, I will transform your manuscript into a polished , compelling masterpiece that resonates with your audience and stands out in the marketplace</p>

          </div>
          <div className='w-full h-full  my-14 rounded-full border-red-300 hover:shadow-lg hover:transition-all hover:duration-5s'>
            <img src={EditImg} alt="Development" />
          </div>

        </div>

      </div>
    </>
  )
}

export default About
