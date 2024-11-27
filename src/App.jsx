import { useState } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

 const handleClick=()=>{
  toast('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

    });
 }

  return (
    <>
    <button onClick={handleClick}>Click Here</button>
    <ToastContainer/>
    </>
  )
}

export default App
