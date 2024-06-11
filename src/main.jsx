import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {createBrowserRouter, RouterProvider} from "react-router-dom";

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<><Navbar/><Home/></>
//     },
//     {
//       path:"/about",
//       element:<><Navbar/><About/></>

//     },
//     {
//       path:"/contact",
//       element:<><Navbar/><Contact/></>

//     }
//   ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
