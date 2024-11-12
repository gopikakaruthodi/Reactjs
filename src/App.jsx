import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [count1, setCount1] = useState(0)

  const calc=useMemo(()=>{
    return count*3
  },[count])


  return (
    <>
    <p>{calc}</p>
      <button onClick={()=>setCount(count+=1)}>Parent {count}</button>
      <button onClick={()=>setCount1(count1+=1)}>Child {count1}</button>

    </>
  )
}

export default App
