import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

//Dont change here something first see the vedio I send you all are correct just img bug came out and you tell me to fix nav and foot it done in element so the vedio you will understand what it done

// import asadImg from './assets/asad-candid.jpg'

//add your img in src/assets folder and just update the import statement and src attribute here. 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home/><Footer/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/><Footer/></>

    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/><Footer/></>

    }
  ])

  return (

<>


{/* <div className="container">
  
<div className='w-[500px] h-[500px] bg-red-400 flex justify-center rounded-2xl'>
   <div className='flex justify-center w-80 h-80 bg-red-500 m-24 space-x-56 shadow-2xl rounded-full'>
    <img
    className='w-full h-full rounded-full '
    src={asadImg} alt="Done" />
   </div>
  </div>
</div> */}
<RouterProvider router={router} />
 
  
  

</>

  )
}

export default App
