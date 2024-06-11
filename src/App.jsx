import './App.css'
import Navbar from './components/Navbar'
import asadImg from './assets/asad-candid.jpg'
//add your img in src/assets folder and just update the import statement and src attribute here. 

function App() {

  return (

<>

<Navbar/>
<div className="container">
  
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

export default App
