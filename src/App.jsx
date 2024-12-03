import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [count,setCount]=useState(0)
  const [numbers,setNumbers]=useState([1,2,3,4,5])

  const handleAdd=useCallback(()=>{
    setNumbers((pre)=>([...pre,pre.length+1]))
  },[numbers])
  console.log("Parent");
  
  return (
    <>
      <h2>count : {count}</h2>
      <button onClick={()=>setCount(count+1)} >Increment Count</button>
      <Child addData={handleAdd}/>

      <ul>{
        numbers.map((no)=><li>Number : {no}</li>)
        }</ul>
    </>
  )
}

export default App
