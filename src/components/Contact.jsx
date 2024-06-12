import React, { useState } from 'react';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const onClick = () => {
    // I  Set the showMessage state to true when the button is clicked
    setShowMessage(true);

    // I set timeout here but it didnot stay for longtime as I want user to see it properly so run some js in it
    setTimeout(() => {
      setShowMessage(false);
    }, 30000);
  };
  return (
    <div className=" w-full h-full bg-red-200 pt-7 py-7">



      <div className="w-20% h-50% justify-center text-center bg-white m-6 text-red-400 mx-80 space-y-3 align-middle pt-6 flex rounded-2xl hover:shadow-lg hover:transition-all hover:duration-5s ">

        <form className='text-center mt-14 ' action="">

          {/* for name */}
          <div className="mb-4">
            <label className="block text-red-400 font-serif text-lg font-bold mb-2" for="username">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Your Name" />

          </div>

          {/* for email */}

          <div className="mb-4">
            <label className="block text-red-400 font-serif text-lg font-bold mb-2" for="username">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter Your Email" />

            </div>

            {/* for message */}
          
          <div className="mb-4">

            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" id="message" placeholder='Enter Your Message Here :)'></textarea>

          </div>


          <button className='mx-28 my-4 p-7 py-1 text-center align-middle  bg-red-400 text-white rounded-3xl hover:bg-white hover:text-red-400  ' onClick={onClick}>Submit</button>
          {showMessage && <p>Thanks for your message! Have A Great Day!</p>}
          
        </form>
      </div>
    </div>

  )
}

export default Contact
