import React from 'react';
import webImage from '../assets/web.jpg';
import designImg from '../assets/design.jpg';
import EditImg from '../assets/Editor.jpg';

const About = () => {
  return (
    <div className="container mx-auto sm:px-6 py-12 bg-slate-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Web Development */}
        <div className="bg-white text-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div className="h-64 bg-slate-200 rounded-t-2xl overflow-hidden">
            <img src={webImage} alt="Web Development" className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h1 className="italic font-bold text-4xl font-serif mb-4">Web Developer</h1>
            <p className="mb-4">Web Development, proficient in HTML, CSS, JavaScript, Tailwind CSS, React.js, and Next.js to build responsive and dynamic websites.</p>
            <p className="mb-4">Skilled in designing and developing user-friendly and aesthetically pleasing websites. Passionate about crafting engaging user interfaces with clean and efficient code.</p>
          </div>
        </div>

        {/* Designer */}
        <div className="bg-white text-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div className="h-64 bg-slate-200 rounded-t-2xl overflow-hidden">
            <img src={designImg} alt="Designer" className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h1 className="italic font-bold text-4xl font-serif mb-4">Designer</h1>
            <p className="mb-4">Logo Design, UI/UX Design, and application design expertise to create visually stunning and intuitively functional interfaces.</p>
          </div>
        </div>

        {/* Video Editor */}
        <div className="bg-white text-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div className="h-64 bg-slate-200 rounded-t-2xl overflow-hidden">
            <img src={EditImg} alt="Video Editor" className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h1 className="italic font-bold text-4xl font-serif mb-4">Video Editor</h1>
            <p className="mb-4">Video Editing, expertise in creating visually appealing video content that captures attention and increases viewer engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
