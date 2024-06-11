import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);


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
