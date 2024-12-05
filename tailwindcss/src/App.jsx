import './App.css'

function App() {

  return (
    <div className='flex justify-center items-center h-screen text-lg font-mono tracking-wide bg-indigo-50'>
        <div className='grid relative'>
          <div class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-violet-400"></span>
          </div>
          <div dir='ltr'><h1 className='bg-indigo-300 text-white-0 p-4 m-2 rounded-s-lg  animate-bounce relative flex'>Welcome</h1></div>
        </div>
    
     <div dir='rtl'><h1 className='bg-lime-500 text-white-0 p-4 m-2 rounded-lg  animate-spin h-10 '>G</h1></div>

     

   

    </div>
  )
}

export default App
