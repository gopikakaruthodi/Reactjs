import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  let [count, setCount] = useState(0)

  console.log("Parent Count");
  
  return (
    <>
     <button onClick={()=>setCount(count+=1)}>Parent count {count}</button>
     <Child/>
    </>
  )
}

export default App
