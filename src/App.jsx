import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  let [count, setCount] = useState(0)
  const [todos,setTodo]= useState([])

  const addTodo=useCallback(()=>{
      setTodo((pre)=>[...pre,"New Task"])
  },[todos])

  const increment=()=>{
    setCount(count+=1)
  }
  console.log("parent");

  return (
    <>
     <h2>Counter {count}</h2>
     <button onClick={increment}>Increment</button>
     <hr />
     <Child todos={todos} addTodo={addTodo}/>
    </>
  )
}

export default App
