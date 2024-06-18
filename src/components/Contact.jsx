import React, { useState } from 'react';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const onClick = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 6000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 bg-slate-800">
      <div className="max-w-3xl mx-auto bg-white text-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8">
        <form className="text-center mt-8">
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold font-serif mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold font-serif mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Email"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-bold font-serif mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Message Here :)"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="hover:-translate-x-1 hover:scale-110 duration-300 mx-auto mt-4 p-4 text-center align-middle bg-slate-800 text-white rounded-full hover:bg-white hover:text-slate-800"
            onClick={onClick}
          >
            Submit
          </button>

          {/* Confirmation Message */}
          {showMessage && (
            <p className="mt-4 text-center text-slate-800 font-bold">Thanks for your message! Have A Great Day!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
